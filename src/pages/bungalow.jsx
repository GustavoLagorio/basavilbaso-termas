import Calendario from "../componentes/calendario";
import BungalowCarousel from "../componentes/bungalow-carousel";
import "../styles/bungalow.css"
import "../styles/calendario.css"


const Bungalow = () => {
  return (
    <main className="bungalow_main">
      <div className="bungalow_main_titulo">
        <h1>Nombre</h1>
      </div>
      <BungalowCarousel />
      <h2>Servicios y características</h2>
      <ul className="bungalow_main_comodidades_list">
        <li className="bungalow_main_comodidades_list_item">
          <img src="assets/icons/heladera.png" alt="" />
        </li>
        <li className="bungalow_main_comodidades_list_item">
          <img src="assets/icons/parrilla.png" alt="" />
        </li>
        <li className="bungalow_main_comodidades_list_item">
          <img src="assets/icons/parking.png" alt="" />
        </li>
        <li className="bungalow_main_comodidades_list_item">
          <img src="assets/icons/tv.png" alt="" />
        </li>
      </ul>
      <p>Condiciones de reserva</p>
      <form action="" className="bungalow_main_form">
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

export default Bungalow
