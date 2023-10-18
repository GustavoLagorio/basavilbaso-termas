import { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import es from 'date-fns/locale/es';
import { addDays, addYears, startOfDay, eachDayOfInterval, format } from 'date-fns'; // Importa funciones de date-fns

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "../styles/calendario.css"

//Recibe como parametros una funcion del componente Bungalow para manejar las fechas seleccionadas
function CalendarioGeneral({ onFechasSeleccionadas, token, onRangeSelected }) {

  //Declaramos como today el dia de la fecha mas 2 dias para esperar acreditacion del pago de reserva
  const today = addDays(startOfDay(new Date()), 3);

  const maxDate = addYears(today, 1); // Calcula la fecha máxima (1 año a partir de hoy)

  const [isLoading, setIsLoading] = useState(true);

  //Fechas e idBungalow de las reservas
  const [reservas, setReservas] = useState({

    idBungalow: '',
    startDate: new Date(),
    endDate: new Date()

  })

  //Objeto con fechas reservadas por bungalow
  const [fechasReservadas, setFechasReservadas] = useState({})

  //Array con las fechas que se repiten en los bungalows para anular
  const [fechasParaAnular, setfechasParaAnular] = useState(undefined)

  //Se declara un estado que controla el rango de fechas seleccionadas
  const [dateRange, setDateRange] = useState([

    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },

  ]);

  //Declaramos el estado que maneja las fechas desabilitadas
  const [disabledDates, setDisableDates] = useState(undefined)

  // Nuevo estado para manejar el componente DateRangePicker
  const [componenteCalendario, setComponenteCalendario] = useState(null);


  useEffect(() => {

    if (token) {

      const obtenerReservas = async () => {

        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/events/fechas`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-token': token
            },
          })

          if (response.status === 200) {

            //Guardamos la informacion obtenida en reservas
            const data = await response.json();
            //Recorremos las reservas de la BD para guardarlas
            const reservasBD = data.eventosDatos.map(reserva => ({
              ...reserva,
              startDate: new Date(reserva.startDate),
              endDate: new Date(reserva.endDate),
            }));
            setReservas(reservasBD);

          } else {

            console.error('Error al obtener las reservas:', response.statusText);

          }
        } catch (error) {

          console.log(error);

        }

      }

      //Llamada para obtener el array de reservas
      obtenerReservas();

    }

  }, [token])//Se ejecuta cuando el token cambia

  useEffect(() => {

    if (reservas && reservas.length) {

      const fechasOcupadasPorBungalow = {};

      //hay que darle la cantidad de bungalows en este caso 4
      for (let index = 1; index <= 4; index++) {

        //Obtenemos las reservas agrupadas por idBungalow
        const reservasPorBungalow = reservas.filter(reserva => reserva.idBungalow === index);
        const fechasOcupadasBungalow = [];
        reservasPorBungalow.map((reserva) => {
          //Volvemos a pasar a horario de Argentina para evitar problemas
          const startDate = (new Date(reserva.startDate));
          const endDate = (new Date(reserva.endDate));

          const datesInRange = eachDayOfInterval({ start: startDate, end: endDate });
          datesInRange.forEach(date => {
            const formattedDate = format(date, 'yyyy-MM-dd', { locale: es });
            fechasOcupadasBungalow.push(formattedDate);

          });
        });

        fechasOcupadasPorBungalow[index] = fechasOcupadasBungalow;
        setFechasReservadas(fechasOcupadasPorBungalow);

      }
    }
  }, [reservas])

  useEffect(() => {
    /* Después de obtener todas las fechas ocupadas
        const fechasOcupadas = Object.values(fechasReservadas).flat();*/

    const fechasComunes = Object.values(fechasReservadas).reduce((fechasComunes, fechasBungalow) => {
      // Si es la primera iteración, inicializa las fechas comunes con las del primer bungalow
      if (fechasComunes.length === 0) {
        return [...fechasBungalow];
      }

      // Encuentra las fechas que están en fechasComunes y también en fechasBungalow
      return fechasComunes.filter(fecha => fechasBungalow.includes(fecha));
    }, []);

    setfechasParaAnular(fechasComunes);

  }, [fechasReservadas])

  useEffect(() => {

    if (fechasParaAnular !== undefined) {

      // Agrega un día a cada fecha antes de almacenarla en disabledDates
      const modifiedDates = fechasParaAnular.map(dateString => addDays(new Date(dateString), 1));
      setDisableDates(modifiedDates);
      setIsLoading(false);

    }

  }, [isLoading, fechasParaAnular, dateRange]);

  useEffect(() => {
    if (!isLoading && disabledDates.length !== false) {

      const componenteCalendario = (

        <DateRangePicker
          ranges={dateRange}
          onChange={handleSelect}
          minDate={today}
          maxDate={maxDate}
          locale={es}
          disabledDates={disabledDates}
          rangeColors={['#FF5D5D']}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          direction="horizontal"
          editableDateInputs={true}          
        />
      );

      setComponenteCalendario(componenteCalendario)
    }

  }, [disabledDates, dateRange])

  //Maneja la seleccion de fechas del calendario
  const handleSelect = (ranges) => {

    const { startDate, endDate } = ranges.selection;
    //Ejecutamos la funcion que proviene de Bungalows para guardar las fechas seleccionadas
    onFechasSeleccionadas(startDate, endDate);    
    setDateRange([ranges.selection]);

  };

  useEffect(() => {

    //Declaramos el objeto que contendra las fechas del rango seleccionado
    const rangoSeleccionado = []
    const startDate = dateRange[0].startDate;
    const endDate = dateRange[0].endDate;
    //Iteramos en el intervalo seleccionado y pusheamos las fechas al objeto rangoSeleccioando
    const datesInRange = eachDayOfInterval({ start: startDate, end: endDate });
          datesInRange.forEach(date => {
            const formattedDate = format(date, 'yyyy-MM-dd', { locale: es });
            rangoSeleccionado.push(formattedDate);

          });
    onRangeSelected(rangoSeleccionado, fechasReservadas); // Llama a la función adicional para pasar el rango seleccionado al componente padre

  }, [dateRange, fechasReservadas])

  return (
    <div>
      {componenteCalendario}
    </div>
  )

}

export default CalendarioGeneral;