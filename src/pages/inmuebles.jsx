import InmueblesCarousel from "../componentes/inmuebles-carousel";
import "../styles/inmuebles.css"


const Inmueble = () => {
  return (
    <main className="inmuebles_main" id="inmuebles">
      <div className="inmuebles_main_titulo">
        <h1>Inmuebles</h1>
      </div>
      <div className="inmuebles_main_list">
        <div className="inmuebles_main_list_item">
        <h2>Nombre propiedad</h2>
          <InmueblesCarousel />          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, maxime. Sed et non nobis vero ipsa consequuntur soluta commodi harum sunt quisquam, nisi dolore a ipsum numquam in maiores temporibus.</p>
          <button className="btn-accion">Contacto</button>
        </div>
        <div className="inmuebles_main_list_item">
        <h2>Nombre propiedad</h2>
          <InmueblesCarousel />          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, maxime. Sed et non nobis vero ipsa consequuntur soluta commodi harum sunt quisquam, nisi dolore a ipsum numquam in maiores temporibus.</p>
          <button className="btn-accion">Contacto</button>
        </div>
        <div className="inmuebles_main_list_item">
        <h2>Nombre propiedad</h2>
          <InmueblesCarousel />          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, maxime. Sed et non nobis vero ipsa consequuntur soluta commodi harum sunt quisquam, nisi dolore a ipsum numquam in maiores temporibus.</p>
          <button className="btn-accion">Contacto</button>
        </div>
        <div className="inmuebles_main_list_item">
        <h2>Nombre propiedad</h2>
          <InmueblesCarousel />          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, maxime. Sed et non nobis vero ipsa consequuntur soluta commodi harum sunt quisquam, nisi dolore a ipsum numquam in maiores temporibus.</p>
          <button className="btn-accion">Contacto</button>
        </div>
      </div>

    </main>
  )
}

export default Inmueble
