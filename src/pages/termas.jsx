import imagenes from '../../imagenes.json';

import '../styles/termas.css'

const Termas = () => {

  const imagenesTermas = imagenes[0].termas

  return (
    <main className="termas_main" id="termas">
      <div className="termas_main_titulo" style={{ backgroundImage: `url(${imagenesTermas[0]})` }}>
        <h1>Termas Basavilbaso</h1>
      </div>
      <div className="termas_main_list">
        <div className="termas_main_list_actividad invertido quienes">
          <div className="actividad_desc">
            <h2>01</h2>
            <h3>Quiénes Somos</h3>
            <p>"Amanecer en Termas" ofrece lujosos bungalows en las Termas Basavilbaso, donde el confort se encuentra 
              con la naturaleza. Garantizamos descanso y la oportunidad de sumergirse en las termas.
            </p>
          </div>
          <div className="actividad_imagen">
            <img src={imagenesTermas[1]} alt="Bungalows Amanecer en Termas" />
          </div>
        </div>
        <div className="termas_main_list_actividad invertido termales" >
          <div className="actividad_desc">
            <h2>02</h2>
            <h3>Aguas Termales</h3>
            <p>
              Termas Basavilbaso cuenta con dos piscinas termales de agua salada, con temperaturas de 42°C, ofreciendo
              propiedades únicas y especiales para una experiencia relajante y revitalizante.
            </p>
          </div>
          <div className="actividad_imagen">
            <img src={imagenesTermas[2]} alt="Aguas termales de Termas Basavilbaso" />
          </div>
        </div>
        <div className="termas_main_list_actividad piscinas">
          <div className="actividad_desc">
            <h2>03</h2>
            <h3>Piscinas</h3>
            <p>
            Termas Basavilbaso no solo ofrece aguas termales rejuvenecedoras, sino que además también cuenta con piscinas 
            para todas las edades, proporcionando una experiencia completa y variada para los visitantes.
            </p>
          </div>
          <div className="actividad_imagen">
            <img src={imagenesTermas[3]} alt="Variedad de Piscinas de Termas Basavilbaso" />
          </div>
        </div>
        <div className="termas_main_list_actividad resto">
          <div className="actividad_desc">
            <h2>04</h2>
            <h3>Gastronomía</h3>
            <p>
              Las instalaciones, cuentan con un  restaurante con espacio para 80 comensales. Disfruta de sus platos
              mientras te relajas en las termas.
            </p>
          </div>
          <div className="actividad_imagen">
            <img src={imagenesTermas[4]} alt="Restaurante de Termas Basavilbaso" />
          </div>
        </div>
        <div className="termas_main_list_actividad invertido regionales">
          <div className="actividad_desc">
            <h2>05</h2>
            <h3>Regionales</h3>
            <p>
              Explora Basavilbaso con nuestros productos regionales exclusivos, ideales para disfrutar en las termas o
              regalar. Sumergite en la auténtica experiencia de Basavilbaso con nuestras opciones cuidadosamente
              seleccionadas.
            </p>
          </div>
          <div className="actividad_imagen">
            <img src={imagenesTermas[5]} alt="Venta de regionales dentro de Termas Basavilbaso" />
          </div>
        </div>
        <div className="termas_main_list_actividad invertido instalaciones">
          <div className="actividad_desc">
            <h2>06</h2>
            <h3>Instalaciones</h3>
            <p>
              Termas Basavilbaso ofrece instalaciones completas que incluyen baños, duchas, senderos para ciclistas y áreas para
              observar la flora y fauna, proporcionando a los visitantes una experiencia turística enriquecedora y cómoda.
            </p>
          </div>
          <div className="actividad_imagen">
            <img src={imagenesTermas[6]} alt="Instalaciones de Termas Basavilbaso" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Termas