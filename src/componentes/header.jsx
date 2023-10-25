import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import "../styles/header.css";

export default function Header() {
  const [activado, setActivado] = useState(false);//Control del nav menu

  const activar = () => {
    setActivado((prevActivo) => !prevActivo);
  };

  const [activo, setActivo] = useState("home"); //Cambia a activo secciones de la navbar

  const activarEnlace = (enlace) => {

    setActivo(enlace);
    if(activado) {
      activar()
    }    
  };

  return (
    <header id="header">
      <nav className="nav">
        <div className="nav_logo">
          <HashLink to="/#header" onClick={() => activarEnlace("home")}>
            <img src="/assets/logo.png" alt="Logo Amanecer en Termas" />
          </HashLink>
        </div>
        <div className="nav_titulo">
          <p>Amanecer en Termas</p>
          <p>Bungalows Basavilbaso</p>
        </div>
        <div className={activado ? "nav_menu activado" : "nav_menu"}>
        <div className={activado ? "separador" : "separador activado"}></div>
          <ul className="menu_list">
            <li className={activo === "home" ? "list_item activo" : "list_item"}>
              <HashLink to="/#header" onClick={() => activarEnlace("home")}>Home</HashLink>
            </li>
            <li className={activo === "bungalows" ? "list_item activo" : "list_item"}>
              <HashLink to="/bungalows#header" onClick={() => activarEnlace("bungalows")}>Bungalows</HashLink>
            </li>
            <li className={activo === "actividades" ? "list_item activo" : "list_item"}>
              <HashLink to="/actividades#header" onClick={() => activarEnlace("actividades")}>Actividades</HashLink>
            </li>
            <li className="list_item">
              <HashLink to="#contacto" >Contacto</HashLink>
            </li>
            <li className={activo === "termas" ? "list_item activo" : "list_item"}>
              <HashLink to="/termas#header" onClick={() => activarEnlace("termas")}>Termas</HashLink>
            </li>
            <li className={activo === "inmuebles" ? "list_item activo" : "list_item"}>
              <HashLink to="/inmuebles#header" onClick={() => activarEnlace("inmuebles")}>Inmuebles</HashLink>
            </li>
          </ul>
        </div>
        <div className="nav_button">
          <button id="nav_toggle" onClick={activar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 15 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0.417565C0 0.30682 0.0416556 0.200611 0.115803 0.122302C0.18995 0.0439934 0.290515 0 0.395376 0H13.8381C13.943 0 14.0436 0.0439934 14.1177 0.122302C14.1919 0.200611 14.2335 0.30682 14.2335 0.417565C14.2335 0.52831 14.1919 0.634519 14.1177 0.712828C14.0436 0.791137 13.943 0.83513 13.8381 0.83513H0.395376C0.290515 0.83513 0.18995 0.791137 0.115803 0.712828C0.0416556 0.634519 0 0.52831 0 0.417565ZM0 5.84591C0 5.73517 0.0416556 5.62896 0.115803 5.55065C0.18995 5.47234 0.290515 5.42835 0.395376 5.42835H13.8381C13.943 5.42835 14.0436 5.47234 14.1177 5.55065C14.1919 5.62896 14.2335 5.73517 14.2335 5.84591C14.2335 5.95666 14.1919 6.06286 14.1177 6.14117C14.0436 6.21948 13.943 6.26348 13.8381 6.26348H0.395376C0.290515 6.26348 0.18995 6.21948 0.115803 6.14117C0.0416556 6.06286 0 5.95666 0 5.84591ZM0 11.2743C0 11.1635 0.0416556 11.0573 0.115803 10.979C0.18995 10.9007 0.290515 10.8567 0.395376 10.8567H13.8381C13.943 10.8567 14.0436 10.9007 14.1177 10.979C14.1919 11.0573 14.2335 11.1635 14.2335 11.2743C14.2335 11.385 14.1919 11.4912 14.1177 11.5695C14.0436 11.6478 13.943 11.6918 13.8381 11.6918H0.395376C0.290515 11.6918 0.18995 11.6478 0.115803 11.5695C0.0416556 11.4912 0 11.385 0 11.2743Z"
                fill="#254B5E"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}