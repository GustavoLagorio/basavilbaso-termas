import HomeCarousel from "../componentes/home-carousel";
import { HashLink } from "react-router-hash-link";
import imagenes from '../../imagenes.json';

import "../styles/home.css";


export default function Body() {
  
  const imagenesHome = imagenes[0].home

  return (
    <main className="home_main" id="home">
      <div className="reservas">
        <HashLink to={"/bungalows#header"} id="reservas">
          Reservar
        </HashLink>
      </div>
      <div className="home_main_titulo" style={{ backgroundImage: `url(${imagenesHome[0]})` }}>
        <div className="home_main_titulo_text">
          <p>Termas &</p>
          <p className="txt-bungalows">Bungalows</p>
          <p className="txt-basavilbaso">Basavilbaso</p>
          <p className="txt-slogan">Lujo natural, descanso</p>
          <p className="txt-slogan">asegurado</p>
        </div>
      </div>
      <div className="home_main_bungalows">
        <h2>Bungalows</h2>
        <div className="home_main_bungalows_reservas">
          <h3>Sentite en casa</h3>
          <p>Nuestros Bungalows cuentan con el mejor equipamiento y confort, para que tu experiencia en las Termas
            Basavilbaso sea la mejor. Te ofrecemos un espacio para disfrutar en familia o en pareja.
          </p>
          <HashLink to={"/bungalows#header"} className="btn-accion">Reservar</HashLink>
        </div>
        <HomeCarousel className="home_main_bungalows_carrousel" />
      </div>
      <div className="home_main_predio">
        <h2>Predio</h2>
        <h3>Termas Basavilbaso</h3>
        <div className="home_main_predio_imagenes">
          <div className="predio_imagen primera">
            <img src={imagenesHome[5]} alt="" />
          </div>
          <div className="predio_imagen imagen1">
            <img src={imagenesHome[6]} alt="" />
          </div>
          <div className="predio_imagen imagen2">
            <img src={imagenesHome[7]} alt="" />
          </div>
        </div>
      </div>
      <div className="home_main_desc" style={{ backgroundImage: `url(${imagenesHome[8]})` }}>
        <div className="predio_desc">
          <h3>Acerca del predio</h3>
          <p>
            Descubre Termas de Basavilbaso, un moderno complejo turístico en
            Entre Ríos, cercano a Rosario y Buenos Aires. Ofrece aguas termales
            relajantes en cuatro piscinas, incluyendo una cubierta todo el año.
            Disfruta de tratamientos de spa, masajes y buena comida. Tu escapada
            de tranquilidad te espera en Termas de Basavilbaso.
          </p>
          <HashLink to={"/termas#header"} className="btn-accion">Conocer más</HashLink>
        </div>
      </div>
    </main>
  );
}