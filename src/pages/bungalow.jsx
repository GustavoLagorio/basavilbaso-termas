import Calendario from "../componentes/calendario";
import BungalowCarousel from "../componentes/bungalow-carousel";
import { useParams } from "react-router-dom";
import { Comodidades } from "../componentes/comodidades";
import { useEffect, useState } from 'react';
import { format, differenceInDays, parseISO, endOfDay } from 'date-fns';

import "../styles/bungalow.css"
import "../styles/calendario.css"

export function Bungalow() {

  const { id } = useParams();

  const [bungalow, setBungalow] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //Estado para obtener el token
  const [token, setToken] = useState(null);

  //Evita que el calendario deje de renderizarse al hacerle click en una fecha
  const [fechas, setFechas] = useState({

    startDate: new Date(),
    endDate: new Date(),

  });

  //Estructura de la informacion del formulario y la BD
  const [formulario, setFormulario] = useState({
    bungalow: undefined,
    nombre: undefined,
    apellido: undefined,
    startDate: new Date(),
    endDate: new Date(),
    ocupantes: '',
    noches: 0
  });

  const [total, setTotal] = useState(0)


  // Realizar una solicitud al servidor para obtener el token
  useEffect(() => {

    const obtenerTokenCliente = async () => {

      try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/cliente`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',

          },
        })

        if (response.status === 200) {

          const data = await response.json();
          setToken(data.token);

        } else {

          console.error('Error al obtener el token:', response.statusText);

        }
      } catch (error) {

        console.log(error);

      }
    }

    obtenerTokenCliente()


  }, []);//Argumento vacio para que se ejecute una vez al ejecutar el componente

  useEffect(() => {

    //Obtenemos el bungalow segun el id del params
    const obtenerBungalow = async () => {

      try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/bungalows/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token

          },
        })

        if (response.status === 200) {

          //Se guarda la informacion en bungalow, se desestructura el nombre y se
          //guarda la informacion del nombre y el id en el formulario
          const data = await response.json();
          setBungalow(data.bungalow[0]);
          setIsLoading(false);
          setFormulario(prevState => ({
            ...prevState,
            bungalow: data.bungalow[0].nombre, // Asegúrate de que "nombre" sea la propiedad correcta en tu objeto bungalow
            ocupantes: data.bungalow[0].precio[0].ocupantes
          }));

        } else {

          console.error('Error al obtener los bungalows:', response.statusText);

        }
      } catch (error) {

        console.log(error);

      } finally {

        setIsLoading(false);

      }

    };

    //LLamamos al al funcion para obtener el bungalow
    obtenerBungalow();

  }, [token, id]); //Se le da como parametros el token y el bungalowId para que se ejecute cuando estos cambian

  //Guarda las fechas seleccionadas del componente Calendario
  const handleFechasSeleccionadas = (startDate, endDate) => {

    setFechas({ startDate, endDate });
    setFormulario({
      ...formulario,
      startDate,
      endDate,
    });
  };

  useEffect(() => {
    // Función para calcular las noches y actualizar el estado
    const calcularNoches = (startDate, endDate) => {

      const noches = differenceInDays(endDate, startDate);
      return noches;
    };

    // Actualizar el estado de 'noches' cuando cambien 'startDate' o 'endDate'
    const nochesCalculadas = calcularNoches(formulario.startDate, formulario.endDate);
    setFormulario(prevState => ({
      ...prevState,
      noches: nochesCalculadas
    }));
  }, [formulario.startDate, formulario.endDate, formulario.ocupantes]); // Se ejecutará cuando 'startDate' o 'endDate' cambien

  useEffect(() => {

    if (formulario.noches > 0) {

      // Encontrar el objeto precio correspondiente a la cantidad de ocupantes seleccionada
      const precioSeleccionado = bungalow.precio.find(precio => precio.ocupantes === parseInt(formulario.ocupantes));
      console.log(precioSeleccionado);

      setTotal(precioSeleccionado.costo * formulario.noches)

    }

  }, [formulario.noches, formulario.ocupantes])

  const handleInputChange = (e) => {

    // Actualiza el estado del formulario cuando los campos de entrada cambian
    setFormulario({ ...formulario, [e.target.name]: e.target.value });

  };

  const handleSubmint = async (e) => {
    e.preventDefault();

    // Formatear las fechas en el formato dd/mm/aa
    const formattedStartDate = format(formulario.startDate, 'dd/MM/yy');
    const formattedEndDate = format(formulario.endDate, 'dd/MM/yy');

    const mensaje = `Hola mi nombre es ${formulario.nombre} ${formulario.apellido} y quiero reservar ${formulario.bungalow} del ${formattedStartDate} al ${formattedEndDate}`;
    const enlaceWhatsApp = `https://wa.me/541134330889?text=${encodeURIComponent(mensaje)}`;
    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(enlaceWhatsApp);

  }

  if (!isLoading) {
    console.log(formulario.ocupantes);
    console.log(formulario.noches);

    return (
      <main className="bungalow_main">
        <div className="bungalow_main_titulo" style={{ backgroundImage: `url(${bungalow.galeria[0]})` }}>
          <h1>{bungalow.nombre}</h1>
        </div>
        <BungalowCarousel imagenes={bungalow.galeria} />
        <h2>Servicios y características</h2>
        <Comodidades comodidades={bungalow.comodidades} />
        <div className="precio">
          {bungalow.precio.map((precio, index) => (
            <div key={index}>
              <p>Costo para {precio.ocupantes} personas por noche: ${precio.costo}</p>
              <div className="separador"></div>
            </div>
          ))}
        </div>
        <div className="terminos">
        <h2>Condiones de reserva</h2>
        <p>Las condiciones son:</p>
        </div>
        <form action="" className="bungalow_main_form" onSubmit={handleSubmint}>
          <h3>Completa con tus datos para reservar</h3>
          <div className="bungalow_main_form_usuario">
            <label htmlFor="nombre" className="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" onChange={handleInputChange} required placeholder="Ingresa tu Nombre" />
            <label htmlFor="apellido" className="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" onChange={handleInputChange} required placeholder="Ingresa tu Apellido" />
            <label htmlFor="ocupantes" className="ocupantes">Cantidad máxima de huéspedes:</label>
            <select id="ocupantes" name="ocupantes" className="ocupantes" value={formulario.ocupantes} onChange={handleInputChange} required>
              {bungalow.precio.map((precio, index) => (
                <option key={index} value={precio.ocupantes}>{precio.ocupantes}</option>
              ))}
            </select>
          </div>
          <Calendario
            token={token}
            onFechasSeleccionadas={handleFechasSeleccionadas}
          />
          <p>Total a pagar: ${total}</p>
          <button type="submit" className="btn-accion">Reservar</button>
        </form>
      </main>
    )
  }

}