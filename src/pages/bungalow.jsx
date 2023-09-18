import Calendario from "../componentes/calendario";
import BungalowCarousel from "../componentes/bungalow-carousel";
import listaBungalows from "../../lista-bungalows";
import { useParams } from "react-router-dom";
import { Comodidades } from "../componentes/comodidades";

import "../styles/bungalow.css"
import "../styles/calendario.css"





export function Bungalow() {

  const {id} = useParams();
  console.log(id);
  const bungalowSeleccionado = listaBungalows.find(bungalow => bungalow.id === parseInt(id));
  console.log(bungalowSeleccionado.galeria[0]);
  

  return (
    <main className="bungalow_main">
      <div className="bungalow_main_titulo" style={{backgroundImage: `url(${bungalowSeleccionado.galeria[0]})`}}>
        <h1>{bungalowSeleccionado.nombre}</h1>
      </div>
      <BungalowCarousel imagenes={bungalowSeleccionado.galeria}/>
      <h2>Servicios y características</h2>
      <Comodidades comodidades={bungalowSeleccionado.comodidades}/>
      <p>Condiciones de reserva</p>
      <form action="" className="bungalow_main_form">
        <h3>Completa con tus datos para reservar</h3>
        <div className="bungalow_main_form_usuario">
          <label htmlFor="nombre" className="nombre">Nombre:</label>
          <input type="text" id="nombre" required placeholder="Ingresa tu Nombre" />
          <label htmlFor="apellido" className="apellido">Apellido:</label>
          <input type="text" id="apellido" required placeholder="Ingresa tu Apellido" />
          <label htmlFor="email" className="email">Email:</label>
          <input type="email" id="email" required placeholder="Ingresa tu Email" />
          <label htmlFor="dni" className="dni">DNI:</label>
          <input type="number" id="dni" required placeholder="Ingresa tu documento de identidad" />
        </div>
        <Calendario />
        <button type="submit" className="btn-accion">Reservar</button>
      </form>
    </main>
  )
}