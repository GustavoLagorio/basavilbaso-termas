import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="#contacto">
      <div className="footer_ubicacion">
        <h2>Ubicación</h2>
        <div className="footer_ubicacion_contacto">
          <h3>Contacto</h3>
          <p>Direccion lsdasd 449615</p>
          <img src="/assets/icons/call.png" alt="telefono" />
          <p>Teléfono 4161.</p>
          <img src="/assets/icons/mail.png" alt="email" />
          <p>Email: sdouasdo@ohasod.com</p>
          <a href="./docs/contacto.html" className="btn-accion">
            Contactanos
          </a>
        </div>
        <div className="footer_ubicacion_mapa">
          <img src="assets/mapa-final.png" alt="" />
        </div>
        <div className="footer_ubicacion_rutas">
          <h3>Como llegar</h3>
          <ul>
            <li>
              <span>
                <img src="/assets/icons/mapa.png" alt="mapa" />
              </span>
              <span>
              <Link to="https://www.google.com/maps/dir/Rosario,+Santa+Fe/Termas+de+Basavilbaso+S.A.,+Km.+93+Ruta+20,+E3170+Basavilbaso,+Entre+R%C3%ADos/@-32.6293488,-60.466493,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x95b6539335d7d75b:0xec4086e90258a557!2m2!1d-60.6930416!2d-32.9587022!1m5!1m1!1s0x95b1b218b1e06aa1:0x80055ce589987b6c!2m2!1d-58.8986039!2d-32.3843693?entry=ttu" className="ruta" target="_blank">Rosario</Link>
              </span>
            </li>
            <li>
              <span>
                <img src="/assets/icons/mapa.png" alt="mapa" />
              </span>
              <span>
                <Link to="https://www.google.com/maps/dir/Buenos+Aires,+CABA/Termas+de+Basavilbaso+S.A.,+Km.+93+Ruta+20,+E3170+Basavilbaso,+Entre+R%C3%ADos/@-33.484611,-60.0180227,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!2m2!1d-58.3815591!2d-34.6036844!1m5!1m1!1s0x95b1b218b1e06aa1:0x80055ce589987b6c!2m2!1d-58.8986039!2d-32.3843693?entry=ttu" className="ruta" target="_blank">Buenos Aires</Link>
              </span>
            </li>
            <li>
              <span>
                <img src="/assets/icons/mapa.png" alt="mapa" />
              </span>
              <span>
              <Link to="https://www.google.com/maps/dir/Montevideo+Departamento+de+Montevideo,+Uruguay/Termas+de+Basavilbaso+S.A.,+Km.+93+Ruta+20,+E3170+Basavilbaso,+Entre+R%C3%ADos/@-33.6357464,-58.8753615,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x959f80ffc63bf7d3:0x6b321b2e355bec99!2m2!1d-56.1851147!2d-34.9055016!1m5!1m1!1s0x95b1b218b1e06aa1:0x80055ce589987b6c!2m2!1d-58.8986039!2d-32.3843693?entry=ttu" className="ruta" target="_blank">Montevideo</Link>
              </span>
            </li>
            <li>
              <span>
                <img src="/assets/icons/mapa.png" alt="mapa" />
              </span>
              <span>
              <Link to="https://www.google.com/maps/dir/C%C3%B3rdoba/Termas+de+Basavilbaso+S.A.,+Km.+93+Ruta+20,+E3170+Basavilbaso,+Entre+R%C3%ADos/@-32.6825346,-64.011496,7z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x9432985f478f5b69:0xb0a24f9a5366b092!2m2!1d-64.1887761!2d-31.4200833!1m5!1m1!1s0x95b1b218b1e06aa1:0x80055ce589987b6c!2m2!1d-58.8986039!2d-32.3843693?entry=ttu" className="ruta" target="_blank">Córdoba</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_separador"></div>
      <div className="footer_logo">
        <img src="/assets/logo.png" alt="Logo Amanecer en Termas" />
        <p>Amanecer en Termas</p>
        <p>Bungalows Basavilbaso</p>
      </div>
      <div className="footer_redes">
        <ul className="footer_redes_list">
          <li className="footer_redes_list_item">
            <a href="">
              <img src="/assets/icons/instagram.png" alt="instagram" />
            </a>
          </li>
          <li className="footer_redes_list_item">
            <a href="">
              <img src="/assets/icons/facebook.png" alt="facebook" />
            </a>
          </li>
          <li className="footer_redes_list_item">
            <a href="">
              <img src="/assets/icons/whatsapp.png" alt="whatsapp" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_devs">
        <span>empresa</span>
        <span>
          <img src="#" alt="logo empresa" />
        </span>
      </div>
    </footer>
  );
}