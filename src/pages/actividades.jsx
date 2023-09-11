import "../styles/actividades.css";

const Actividades = () => {
  return (
    <main className="actividades_main" id="actividades">
      <div className="actividades_main_titulo">
        <h1>Actividades</h1>
      </div>
      <div className="actividades_main_list">
        <div className="actividades_main_list_actividad invertido">
          <div className="actividad_desc">
            <h2>01</h2>
            <h3>Termas</h3>
            <p>Termas de Basavilbaso: Complejo turístico con Aguas Termales Salinas, 2h de Rosario, 3h de
              Buenos Aires. Naturaleza, 4 piletas (1 cubierta), spa, masajes, gastronomía. Bungalows cómodos.
              Conexión con naturaleza y calidez local..</p>
          </div>
          <div className="actividad_imagen">
            <img src="assets/actividades6.jpg" alt="" />
          </div>
        </div>
        <div className="actividades_main_list_actividad invertido" >
          <div className="actividad_desc">
            <h2>02</h2>
            <h3>Palacio San José</h3>
            <p>
              Palacio San José en Entre Ríos, hoy Museo Nacional Justo José de Urquiza, combina estilos
              italiano y criollo. En distrito Molino, Uruguay, cerca de Basavilbaso. Destacada construcción
              renacentista italiana en amplia estancia.</p>
          </div>
          <div className="actividad_imagen">
            <img src="assets/actividades10.jpeg" alt="" />
          </div>
        </div>
        <div className="actividades_main_list_actividad">
          <div className="actividad_desc">
            <h2>03</h2>
            <h3>Paraje Calá</h3>
            <p>Cercanos a la ciudad, restos de antiguo polvorín del XIX, campamento previo a Caseros. ONG
              "Amigos del Campamento Calá" lo restaura. Arroyo Calá, histórico Charrúa, relevante para indios
              mbohanes. Doble historia: Ramírez y Urquiza. Leyenda de Calá persiste.</p>
          </div>
          <div className="actividad_imagen">
            <img src="assets/actividades9.jpg" alt="" />
          </div>
        </div>
        <div className="actividades_main_list_actividad">
          <div className="actividad_desc">
            <h2>04</h2>
            <h3>Museo Riel</h3>
            <p>Sumérgete en la historia ferroviaria en Basso. Surgido cerca de la línea Paraná - C. del Uruguay
              del F.C. Central Entre-Riano. Desde 1887, el tren impulsó el crecimiento. Réplica estación
              inglesa 1999, antigua locomotora Nº 43. Explora historia y raíces en museo Basso.
            </p>
          </div>
          <div className="actividad_imagen">
            <img src="assets/actividades3.jpg" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Actividades
