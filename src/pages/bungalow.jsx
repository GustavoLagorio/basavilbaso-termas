import Calendario from "../componentes/calendario";
import BungalowCarousel from "../componentes/bungalow-carousel";
import { useParams } from "react-router-dom";
import { Comodidades } from "../componentes/comodidades";
import { Descripcion } from "../componentes/descripcion";
import { useEffect, useState } from 'react';
import { format, differenceInDays } from 'date-fns';
import Swal from 'sweetalert2';

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

  const [total, setTotal] = useState(0);

  /* Segmento para diferencias horarios de entrada y salida segun se requiera
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');*/

  const videos = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/T4ynGaNUZD0?si=GdvMh9RyaREF_I2F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/T4ynGaNUZD0?si=GdvMh9RyaREF_I2F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/Dk2qSz0257A?si=SuvUpgGnnwlYdI5G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  ]

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
    const telefono = import.meta.env.VITE_API_CONTACTO

    const mensaje = `Hola mi nombre es ${formulario.nombre} ${formulario.apellido} y quiero reservar ${formulario.bungalow} del ${formattedStartDate} al ${formattedEndDate}`;
    const enlaceWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(enlaceWhatsApp);

  }

  const handleUbicacion = () => {

    Swal.fire({
      imageUrl: bungalow.ubicacion,
      imageAlt: 'Ubicacion del Bungalow',
      background: '#4697b4',
      showConfirmButton: false,
      customClass: {
        popup: 'custom-popup',
        content: 'custom-content',
        confirmButton: 'btn-custom'
      },
      heightAuto: false

    })
  }

  if (!isLoading) {

    const iframe = videos[id - 1]

    return (
      <main className="bungalow_main">
        <div className="bungalow_main_titulo" style={{ backgroundImage: `url(${bungalow.galeria[0]})` }}>
          <div className="bungalow_main_titulo_opacidad">
            <h1>{bungalow.nombre}</h1>
          </div>
        </div>
        <BungalowCarousel imagenes={bungalow.galeria} />
        <Descripcion idBungalow={bungalow.idBungalow}/>
        <h2>Servicios y características</h2>
        <Comodidades comodidades={bungalow.comodidades} />        
        <div className="video" dangerouslySetInnerHTML={{ __html: iframe }}></div>
        <div className="precio">
          {bungalow.precio.map((precio, index) => (
            <div key={index}>
              <p>Costo para {precio.ocupantes} personas por noche: ${precio.costo}</p>
              <div className="separador"></div>
            </div>
          ))}
        </div>
        <div className="ubicacion">
          <button className="btn-accion" onClick={handleUbicacion}>Ubicación</button>
        </div>
        <div className="terminos">
          <h2>Condiones de reserva</h2>
          <p>Las condiciones son:</p>
          <ul>
            <li>
              Check-in: 10:00 hs.
            </li>
            <li>
              Check-out: 10:00 hs.
            </li>
            <li>
              Formas de pago: 50% por transferencia bancaria para confirmar reserva y el resto al llegar al bungalow. El monto que se abona al hacer el check-in se hace al valor vigente del bungalow.
            </li>
            <li>
              No se admiten mascotas.
            </li>
          </ul>
        </div>
        <form action="" className="bungalow_main_form" onSubmit={handleSubmint}>
          <h2>Completa con tus datos para reservar</h2>
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
          <div className="total">
            <p>Total a pagar: ${total}</p>
            <div className="separador"></div>
          </div>
          <button type="submit" className="btn-accion">Reservar</button>
        </form>
      </main>
    )
  }

}