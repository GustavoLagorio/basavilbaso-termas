import InmueblesCarousel from "../componentes/inmuebles-carousel";
import imagenes from '../../imagenes.json';
import Swal from 'sweetalert2';

import "../styles/inmuebles.css"


const Inmueble = () => {

  const imagenTitulo = imagenes[0].inmuebleTitulo;
  const imagenesInmueble1 = imagenes[0].inmueble1;
  const imagenesInmueble2 = imagenes[0].inmueble2;
  const imagenesInmueble3 = imagenes[0].inmueble3;

  const handleUbicacion = (imagen) => {

    Swal.fire({
      imageUrl: imagen,
      imageHeight: '100%',
      imageAlt: 'Ubicacion del Inmueble',
      background: '#4697b4',
      showConfirmButton: false,
      customClass: {
        popup: 'custom-popup',
        content: 'custom-content',
        confirmButton: 'btn-custom'
      },
      heightAuto: false      
    });
  }

  const handleContacto = () => {

    const telefono = import.meta.env.VITE_API_INMUEBLE
    console.log(telefono);

    const enlaceWhatsApp = `https://wa.me/${telefono}`;

    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(enlaceWhatsApp);

  }

  return (
    <main className="inmuebles_main" id="inmuebles">
      <div className="inmuebles_main_titulo" style={{ backgroundImage: `url(${imagenTitulo[0]})` }}>
        <h1>Inmuebles</h1>
      </div>
      <div className="inmuebles_main_list">
        <div className="inmuebles_main_list_item">
          <h2>Inmueble 1</h2>
          <InmueblesCarousel imagenes={imagenesInmueble1} />
          <div className="desc">
            <p>
              Venta de inmueble  “4 Estaciones”, dos bungalows de dos plantas amoblados, en Termas Basavilbaso.
            </p>
            <p>Ubicación: Ruta Provincial N° 20.  Km 93 de la ciudad de Basavilbaso. Departamento Concepción del Uruguay. Pcia. Entre Ríos.</p>
            <ul>
              <li>Lote 2 – Manzana 5.</li>
              <li>Superficie Terreno: 208 m<sup>2</sup>.</li>
              <li>Orientación: Este.</li>
              <li>Superficie Cubierta Aprox. P. B.:  58,15 m<sup>2</sup>.</li>
              <li>Superficie Cubierta Aprox.  P. A.: 38,20 m<sup>2</sup>.</li>
              <li>Dependencias Planta Baja:  Cocina Comedor. Dos (2) Dormitorios. Baño adaptado para discapacitado.  Parrilla exterior.</li>
              <li>Dependencias Planta Alta: Cocina comedor. Dormitorio. Baño. Terraza con Parrilla Individual.</li>
              <li>Cocheras semicubiertas al frente de la edificación.</li>
              <li> Tiene planos y escritura aprobadas.</li>
              <li>Ideal para explotación turística o para vivienda permanente.</li>
              <li>Servicios disponibles:  Luz, Agua, Cloacas y Gas envasado.</li>
            </ul>
            <p>Predio Urbanizado y Parquizado</p>
            <p>
              El complejo consta de 60 hectáreas con Arboleda y Lago Artificial. Está en crecimiento constante y posee varias viviendas
              ya construidas. Cuenta con áreas verdes con fauna autóctona y Espacios Comunes.
            </p>
            <p>
              Mayor información: cesarrobinainmobiliaria@gmail.com
            </p>
          </div>
          <div className="ubicacion">
            <button className="btn-accion" onClick={() => handleUbicacion(imagenes[0].inmueble1Mapa[0])}>Ubicación</button>
          </div>
          <button className="btn-accion" onClick={handleContacto}>Contacto</button>
        </div>
        <div className="inmuebles_main_list_item">
          <h2>Inmueble 2</h2>
          <InmueblesCarousel imagenes={imagenesInmueble2} />
          <div className="desc">
            <p>
              Vendo casa en Termas Basavilbaso.
            </p>
            <p>
              Basavilbaso, Entre Rios, Ruta 20 km 93.
            </p>
            <p>
              Ubicación: Zona privilegiada dentro del predio termal, sobre Av. Principal, a 200m de las piletas termales.
              Casa de una planta. Excelente propiedad, muy confortable, luminosa. Con detalles distintivos. Muy buena orientación, soleada.
            </p>
            <p>
              Dependencias: living comedor cocina integrada, tres (3) dormitorios, el principal con aire acondicionado split, dos (2) baños, uno de ellos en suite y toilette. Dos (2) gabinetes de gas envasado y de termotanque.
            </p>
            <p>
              Superficie del terreno: 300 m<sup>2</sup>.
            </p>
            <p>
              Mayor información: cesarrobinainmobiliaria@gmail.com
            </p>
          </div>
          <div className="ubicacion">
            <button className="btn-accion" onClick={() => handleUbicacion(imagenes[0].inmueble2Mapa[0])}>Ubicación</button>
          </div>
          <button className="btn-accion" onClick={handleContacto}>Contacto</button>
        </div>
        <div className="inmuebles_main_list_item">
          <h2>Inmueble 3</h2>
          <InmueblesCarousel imagenes={imagenesInmueble3} />
          <div className="desc">
            <p>Vendo terreno/lote en Termas Basavilbaso.
              Ubicación: Ruta Provincial N° 20.  Km 93 de la ciudad de Basavilbaso. Departamento Concepción del Uruguay. Pcia. Entre Ríos.</p>
            <ul>
              <li>Superficie: 375 m<sup>2</sup>.</li>
              <li>Medidas:  15m. x 25 m.</li>
              <li>Orientación: Norte</li>
              <li>FOS:  112,50 m<sup>2</sup>   /    FOT:  120 m<sup>2</sup></li>
            </ul>
            <p>
              Ideal para emprendimiento turistico, construcción de bungalows y/o casa de fin de semana o vivienda fija. Servicios disponibles:  Luz, Agua y Cloacas. Predio Urbanizado y Parquizado. El Terreno/Lote ya se encuentra escriturado. El complejo consta de 60 hectáreas con Arboleda y Lago Artificial. Está en crecimiento constante y posee varias viviendas ya construidas. Cuenta con áreas verdes con fauna autóctona y Espacios Comunes.
              No hay plazos de construcción, incluso puede comprarse para inversión.
            </p>
            <p>
              Mayor información: cesarrobinainmobiliaria@gmail.com
            </p>
          </div>
          <div className="ubicacion">
            <button className="btn-accion" onClick={() => handleUbicacion(imagenes[0].inmueble3Mapa[0])}>Ubicación</button>
          </div>
          <button className="btn-accion" onClick={handleContacto}>Contacto</button>
        </div>
      </div>

    </main >
  )
}

export default Inmueble
