import { Link } from "react-router-dom";
import imagenes from '../../imagenes.json';

import "../styles/footer.css";

export default function Footer() {

  const imagenesFooter = imagenes[0].footer

  const handleContacto = () => {

    const telefono = import.meta.env.VITE_API_CONTACTO
    console.log(telefono);

    const enlaceWhatsApp = `https://wa.me/${telefono}`;

    // Abrir WhatsApp en una nueva ventana o pestaña
    window.open(enlaceWhatsApp);

  }
  return (
    <footer id="contacto">
      <div className="footer_ubicacion">
        <h2>Ubicación</h2>
        <div className="footer_ubicacion_contacto">
          <h3>Contacto</h3>
          <p>Dirección: Ruta 20 Km 93 Basavilbaso Entre Rios</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="28" viewBox="0 0 18 28" fill="none">
            <path d="M14.3063 15.4542C12.9158 20.6688 9.9678 23.6584 7.14464 25.5312C5.95718 26.3197 4.45971 26.4248 3.23916 25.8345L2.00609 25.2409C0.853757 24.6839 0.341632 23.3277 0.81183 22.0736L1.74533 19.5788C2.15262 18.4907 3.1897 17.8816 4.44164 17.8414C6.14183 17.7872 7.38986 17.793 7.38986 17.793C8.25041 16.6995 8.8738 15.4389 9.22033 14.0914C9.6454 12.505 9.61245 11.2822 9.48588 9.97051C9.48588 9.97051 8.40396 9.33854 6.95687 8.45445C5.98981 7.86332 5.20104 7.13886 5.38452 6.01593L5.81034 3.40017C5.91696 2.76398 6.23926 2.18386 6.72314 1.7572C7.20701 1.33054 7.823 1.08332 8.46769 1.05704L9.8674 1.01624C10.5392 0.990137 11.2051 1.14985 11.792 1.47781C12.3788 1.80576 12.8638 2.28924 13.1935 2.875C14.7652 5.68558 15.6963 10.2479 14.3063 15.4542ZM7.33011 19.4119L7.17054 19.4127L6.56922 19.4159C6.0543 19.4221 5.33024 19.4327 4.49429 19.4602C3.73108 19.4854 3.38559 19.8171 3.26218 20.1462L2.32868 22.6411C2.13199 23.1685 2.36463 23.6149 2.71039 23.783L3.94346 24.3766C4.31224 24.5453 4.71834 24.616 5.12242 24.5818C5.52651 24.5476 5.91492 24.4097 6.25003 24.1814C8.8145 22.4791 11.4733 19.7926 12.7406 15.038C14.0238 10.2239 13.1372 6.09617 11.7793 3.6648C11.594 3.33735 11.3215 3.0677 10.9921 2.88588C10.6627 2.70406 10.2892 2.61719 9.91337 2.63495L8.51209 2.67533C7.99508 2.68939 7.50036 3.1085 7.40936 3.66094L6.98354 6.2767C6.97345 6.3394 6.98052 6.36309 6.98125 6.36664C6.99417 6.4029 7.01358 6.43651 7.03853 6.46583C7.1469 6.61224 7.37345 6.81212 7.80019 7.07235C8.56889 7.54133 9.34097 8.00477 10.1163 8.46262L10.2568 8.54554C10.7884 8.85901 11.0382 9.52289 11.0989 9.81584C11.2345 11.2255 11.2799 12.6646 10.7852 14.5107C10.3839 16.0621 9.66651 17.5139 8.67811 18.7753C8.51778 18.9856 8.03161 19.4103 7.38197 19.4123L7.37018 19.4125L7.33011 19.4119Z" fill="#254B5E" stroke="#254B5E" />
          </svg>
          <p>Teléfono: +54-113124-1195.</p>
          <button className="btn-accion" onClick={handleContacto}>
            Contactanos
          </button>
        </div>
        <div className="footer_ubicacion_mapa">
          <img src={imagenesFooter[0]} alt="Mapa ubicación Termas Basavilbaso" />
        </div>
        <div className="footer_ubicacion_rutas">
          <h3>Como llegar</h3>
          <ul>
            <li>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                  <path d="M21.6661 1.3995C22.5384 2.12774 23.1396 3.30401 23.3854 4.53576C23.4151 4.54579 23.4442 4.55815 23.4722 4.57274L26.204 5.91827C26.3567 5.99292 26.4862 6.11255 26.577 6.26302C26.6679 6.41348 26.7165 6.5885 26.717 6.7674V24.3575C26.716 24.5036 26.6832 24.6475 26.6213 24.7778C26.5593 24.9082 26.4698 25.0215 26.3598 25.1089C26.2498 25.1963 26.1223 25.2553 25.9872 25.2814C25.8522 25.3075 25.7133 25.2999 25.5815 25.2592L18.0086 22.9835L9.00496 25.6262C8.84251 25.6737 8.6708 25.6717 8.50936 25.6205L0.633192 23.1243C0.451144 23.0674 0.291201 22.9494 0.177127 22.788C0.0630534 22.6265 0.00093464 22.4302 0 22.2282L0 4.32241C0 3.69658 0.571743 3.24712 1.14215 3.42349L8.75916 5.78599L12.6305 4.52438C12.6837 4.50763 12.7383 4.49574 12.7934 4.48882C12.943 3.55577 13.3612 2.65969 14.0625 1.78638C14.8947 0.748071 16.3548 0.139311 17.7775 0.0667718C19.2536 -0.00861209 20.3811 0.32706 21.6648 1.39808L21.6661 1.3995ZM1.78069 5.57833V21.5298L8.28627 23.5908V7.59378L1.78069 5.57833ZM12.7467 6.45165L10.067 7.32354V23.3661L16.833 21.3833V16.6967C16.833 16.179 17.2325 15.7594 17.724 15.7594C18.2156 15.7594 18.6137 16.179 18.6137 16.6982V21.2169L24.9363 23.1158V7.36336L23.4401 6.62375C23.4148 6.78021 23.3827 6.93382 23.3426 7.08316C23.0521 8.17375 22.5648 9.19361 21.9079 10.0857L18.599 14.485C18.5119 14.6007 18.4006 14.6931 18.2741 14.7549C18.1475 14.8168 18.0091 14.8463 17.87 14.8412C17.7308 14.8361 17.5946 14.7965 17.4724 14.7255C17.3501 14.6545 17.2451 14.5542 17.1657 14.4324L14.0732 9.66328C13.5629 8.90376 13.2049 8.22672 13.0032 7.62081C12.8765 7.24263 12.7905 6.85041 12.7467 6.45165ZM17.863 1.94141C16.8931 1.99119 15.8966 2.40652 15.4224 2.99679C14.852 3.70796 14.5714 4.37361 14.5153 5.0478C14.4485 5.85995 14.494 6.43316 14.6837 7.00067C14.8239 7.42026 15.1031 7.95221 15.5346 8.59369L17.9538 12.3231L20.5053 8.93078C21.02 8.23036 21.4016 7.42983 21.6287 6.57397C21.9493 5.3792 21.4658 3.62404 20.5601 2.8702C19.6316 2.09503 18.9303 1.88594 17.8643 1.94141H17.863ZM18.0473 2.93278C19.5221 2.93278 20.719 4.19155 20.719 5.74474C20.7171 6.11619 20.6465 6.4836 20.5111 6.82597C20.3758 7.16834 20.1784 7.47897 19.9303 7.7401C19.6822 8.00123 19.3882 8.20776 19.0651 8.34788C18.742 8.48799 18.3962 8.55895 18.0473 8.55671C16.5725 8.55671 15.3756 7.29794 15.3756 5.74474C15.3756 4.19155 16.5725 2.93278 18.0473 2.93278ZM18.0473 4.80742C17.931 4.80667 17.8157 4.83032 17.708 4.87702C17.6003 4.92372 17.5022 4.99256 17.4195 5.0796C17.3368 5.16664 17.2709 5.27017 17.2258 5.3843C17.1806 5.49843 17.157 5.62091 17.1563 5.74474C17.1563 6.26248 17.5557 6.68206 18.0473 6.68206C18.1636 6.68263 18.2789 6.65879 18.3866 6.61192C18.4942 6.56505 18.5921 6.49605 18.6748 6.40888C18.7574 6.32171 18.8231 6.21807 18.868 6.10387C18.913 5.98967 18.9365 5.86716 18.937 5.74332C18.9352 5.49371 18.8406 5.25503 18.6738 5.0796C18.507 4.90416 18.2818 4.80629 18.0473 4.80742Z" fill="#333333" fillOpacity="0.75" />
                </svg>
              </span>
              <span>
                <Link to="https://www.google.com/maps/dir/Rosario,+Santa+Fe/Termas+de+Basavilbaso+S.A.,+Km.+93+Ruta+20,+E3170+Basavilbaso,+Entre+R%C3%ADos/@-32.6293488,-60.466493,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x95b6539335d7d75b:0xec4086e90258a557!2m2!1d-60.6930416!2d-32.9587022!1m5!1m1!1s0x95b1b218b1e06aa1:0x80055ce589987b6c!2m2!1d-58.8986039!2d-32.3843693?entry=ttu" className="ruta" target="_blank">Rosario</Link>
              </span>
            </li>
            <li>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                  <path d="M21.6661 1.3995C22.5384 2.12774 23.1396 3.30401 23.3854 4.53576C23.4151 4.54579 23.4442 4.55815 23.4722 4.57274L26.204 5.91827C26.3567 5.99292 26.4862 6.11255 26.577 6.26302C26.6679 6.41348 26.7165 6.5885 26.717 6.7674V24.3575C26.716 24.5036 26.6832 24.6475 26.6213 24.7778C26.5593 24.9082 26.4698 25.0215 26.3598 25.1089C26.2498 25.1963 26.1223 25.2553 25.9872 25.2814C25.8522 25.3075 25.7133 25.2999 25.5815 25.2592L18.0086 22.9835L9.00496 25.6262C8.84251 25.6737 8.6708 25.6717 8.50936 25.6205L0.633192 23.1243C0.451144 23.0674 0.291201 22.9494 0.177127 22.788C0.0630534 22.6265 0.00093464 22.4302 0 22.2282L0 4.32241C0 3.69658 0.571743 3.24712 1.14215 3.42349L8.75916 5.78599L12.6305 4.52438C12.6837 4.50763 12.7383 4.49574 12.7934 4.48882C12.943 3.55577 13.3612 2.65969 14.0625 1.78638C14.8947 0.748071 16.3548 0.139311 17.7775 0.0667718C19.2536 -0.00861209 20.3811 0.32706 21.6648 1.39808L21.6661 1.3995ZM1.78069 5.57833V21.5298L8.28627 23.5908V7.59378L1.78069 5.57833ZM12.7467 6.45165L10.067 7.32354V23.3661L16.833 21.3833V16.6967C16.833 16.179 17.2325 15.7594 17.724 15.7594C18.2156 15.7594 18.6137 16.179 18.6137 16.6982V21.2169L24.9363 23.1158V7.36336L23.4401 6.62375C23.4148 6.78021 23.3827 6.93382 23.3426 7.08316C23.0521 8.17375 22.5648 9.19361 21.9079 10.0857L18.599 14.485C18.5119 14.6007 18.4006 14.6931 18.2741 14.7549C18.1475 14.8168 18.0091 14.8463 17.87 14.8412C17.7308 14.8361 17.5946 14.7965 17.4724 14.7255C17.3501 14.6545 17.2451 14.5542 17.1657 14.4324L14.0732 9.66328C13.5629 8.90376 13.2049 8.22672 13.0032 7.62081C12.8765 7.24263 12.7905 6.85041 12.7467 6.45165ZM17.863 1.94141C16.8931 1.99119 15.8966 2.40652 15.4224 2.99679C14.852 3.70796 14.5714 4.37361 14.5153 5.0478C14.4485 5.85995 14.494 6.43316 14.6837 7.00067C14.8239 7.42026 15.1031 7.95221 15.5346 8.59369L17.9538 12.3231L20.5053 8.93078C21.02 8.23036 21.4016 7.42983 21.6287 6.57397C21.9493 5.3792 21.4658 3.62404 20.5601 2.8702C19.6316 2.09503 18.9303 1.88594 17.8643 1.94141H17.863ZM18.0473 2.93278C19.5221 2.93278 20.719 4.19155 20.719 5.74474C20.7171 6.11619 20.6465 6.4836 20.5111 6.82597C20.3758 7.16834 20.1784 7.47897 19.9303 7.7401C19.6822 8.00123 19.3882 8.20776 19.0651 8.34788C18.742 8.48799 18.3962 8.55895 18.0473 8.55671C16.5725 8.55671 15.3756 7.29794 15.3756 5.74474C15.3756 4.19155 16.5725 2.93278 18.0473 2.93278ZM18.0473 4.80742C17.931 4.80667 17.8157 4.83032 17.708 4.87702C17.6003 4.92372 17.5022 4.99256 17.4195 5.0796C17.3368 5.16664 17.2709 5.27017 17.2258 5.3843C17.1806 5.49843 17.157 5.62091 17.1563 5.74474C17.1563 6.26248 17.5557 6.68206 18.0473 6.68206C18.1636 6.68263 18.2789 6.65879 18.3866 6.61192C18.4942 6.56505 18.5921 6.49605 18.6748 6.40888C18.7574 6.32171 18.8231 6.21807 18.868 6.10387C18.913 5.98967 18.9365 5.86716 18.937 5.74332C18.9352 5.49371 18.8406 5.25503 18.6738 5.0796C18.507 4.90416 18.2818 4.80629 18.0473 4.80742Z" fill="#333333" fillOpacity="0.75" />
                </svg>
              </span>
              <span>
                <Link to="https://www.google.com/maps/dir/Buenos+Aires,+CABA/Termas+de+Basavilbaso+S.A.,+Km.+93+Ruta+20,+E3170+Basavilbaso,+Entre+R%C3%ADos/@-33.484611,-60.0180227,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!2m2!1d-58.3815591!2d-34.6036844!1m5!1m1!1s0x95b1b218b1e06aa1:0x80055ce589987b6c!2m2!1d-58.8986039!2d-32.3843693?entry=ttu" className="ruta" target="_blank">Buenos Aires</Link>
              </span>
            </li>
            <li>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                  <path d="M21.6661 1.3995C22.5384 2.12774 23.1396 3.30401 23.3854 4.53576C23.4151 4.54579 23.4442 4.55815 23.4722 4.57274L26.204 5.91827C26.3567 5.99292 26.4862 6.11255 26.577 6.26302C26.6679 6.41348 26.7165 6.5885 26.717 6.7674V24.3575C26.716 24.5036 26.6832 24.6475 26.6213 24.7778C26.5593 24.9082 26.4698 25.0215 26.3598 25.1089C26.2498 25.1963 26.1223 25.2553 25.9872 25.2814C25.8522 25.3075 25.7133 25.2999 25.5815 25.2592L18.0086 22.9835L9.00496 25.6262C8.84251 25.6737 8.6708 25.6717 8.50936 25.6205L0.633192 23.1243C0.451144 23.0674 0.291201 22.9494 0.177127 22.788C0.0630534 22.6265 0.00093464 22.4302 0 22.2282L0 4.32241C0 3.69658 0.571743 3.24712 1.14215 3.42349L8.75916 5.78599L12.6305 4.52438C12.6837 4.50763 12.7383 4.49574 12.7934 4.48882C12.943 3.55577 13.3612 2.65969 14.0625 1.78638C14.8947 0.748071 16.3548 0.139311 17.7775 0.0667718C19.2536 -0.00861209 20.3811 0.32706 21.6648 1.39808L21.6661 1.3995ZM1.78069 5.57833V21.5298L8.28627 23.5908V7.59378L1.78069 5.57833ZM12.7467 6.45165L10.067 7.32354V23.3661L16.833 21.3833V16.6967C16.833 16.179 17.2325 15.7594 17.724 15.7594C18.2156 15.7594 18.6137 16.179 18.6137 16.6982V21.2169L24.9363 23.1158V7.36336L23.4401 6.62375C23.4148 6.78021 23.3827 6.93382 23.3426 7.08316C23.0521 8.17375 22.5648 9.19361 21.9079 10.0857L18.599 14.485C18.5119 14.6007 18.4006 14.6931 18.2741 14.7549C18.1475 14.8168 18.0091 14.8463 17.87 14.8412C17.7308 14.8361 17.5946 14.7965 17.4724 14.7255C17.3501 14.6545 17.2451 14.5542 17.1657 14.4324L14.0732 9.66328C13.5629 8.90376 13.2049 8.22672 13.0032 7.62081C12.8765 7.24263 12.7905 6.85041 12.7467 6.45165ZM17.863 1.94141C16.8931 1.99119 15.8966 2.40652 15.4224 2.99679C14.852 3.70796 14.5714 4.37361 14.5153 5.0478C14.4485 5.85995 14.494 6.43316 14.6837 7.00067C14.8239 7.42026 15.1031 7.95221 15.5346 8.59369L17.9538 12.3231L20.5053 8.93078C21.02 8.23036 21.4016 7.42983 21.6287 6.57397C21.9493 5.3792 21.4658 3.62404 20.5601 2.8702C19.6316 2.09503 18.9303 1.88594 17.8643 1.94141H17.863ZM18.0473 2.93278C19.5221 2.93278 20.719 4.19155 20.719 5.74474C20.7171 6.11619 20.6465 6.4836 20.5111 6.82597C20.3758 7.16834 20.1784 7.47897 19.9303 7.7401C19.6822 8.00123 19.3882 8.20776 19.0651 8.34788C18.742 8.48799 18.3962 8.55895 18.0473 8.55671C16.5725 8.55671 15.3756 7.29794 15.3756 5.74474C15.3756 4.19155 16.5725 2.93278 18.0473 2.93278ZM18.0473 4.80742C17.931 4.80667 17.8157 4.83032 17.708 4.87702C17.6003 4.92372 17.5022 4.99256 17.4195 5.0796C17.3368 5.16664 17.2709 5.27017 17.2258 5.3843C17.1806 5.49843 17.157 5.62091 17.1563 5.74474C17.1563 6.26248 17.5557 6.68206 18.0473 6.68206C18.1636 6.68263 18.2789 6.65879 18.3866 6.61192C18.4942 6.56505 18.5921 6.49605 18.6748 6.40888C18.7574 6.32171 18.8231 6.21807 18.868 6.10387C18.913 5.98967 18.9365 5.86716 18.937 5.74332C18.9352 5.49371 18.8406 5.25503 18.6738 5.0796C18.507 4.90416 18.2818 4.80629 18.0473 4.80742Z" fill="#333333" fillOpacity="0.75" />
                </svg>
              </span>
              <span>
                <Link to="https://www.google.com/maps/dir/Basavilbaso,+Entre+R%C3%ADos/65000+Fray+Bentos,+Departamento+de+R%C3%ADo+Negro,+Uruguay/@-32.7873216,-58.6480981,10z/data=!4m14!4m13!1m5!1m1!1s0x95b1b1852d3d6783:0x29463f05fb7a41af!2m2!1d-58.87495!2d-32.3687833!1m5!1m1!1s0x95a54db81a243661:0x8d9425699fb741a8!2m2!1d-58.2988358!2d-33.1272934!3e0?entry=ttu" className="ruta" target="_blank">Fray Bentos</Link>
              </span>
            </li>
            <li>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                  <path d="M21.6661 1.3995C22.5384 2.12774 23.1396 3.30401 23.3854 4.53576C23.4151 4.54579 23.4442 4.55815 23.4722 4.57274L26.204 5.91827C26.3567 5.99292 26.4862 6.11255 26.577 6.26302C26.6679 6.41348 26.7165 6.5885 26.717 6.7674V24.3575C26.716 24.5036 26.6832 24.6475 26.6213 24.7778C26.5593 24.9082 26.4698 25.0215 26.3598 25.1089C26.2498 25.1963 26.1223 25.2553 25.9872 25.2814C25.8522 25.3075 25.7133 25.2999 25.5815 25.2592L18.0086 22.9835L9.00496 25.6262C8.84251 25.6737 8.6708 25.6717 8.50936 25.6205L0.633192 23.1243C0.451144 23.0674 0.291201 22.9494 0.177127 22.788C0.0630534 22.6265 0.00093464 22.4302 0 22.2282L0 4.32241C0 3.69658 0.571743 3.24712 1.14215 3.42349L8.75916 5.78599L12.6305 4.52438C12.6837 4.50763 12.7383 4.49574 12.7934 4.48882C12.943 3.55577 13.3612 2.65969 14.0625 1.78638C14.8947 0.748071 16.3548 0.139311 17.7775 0.0667718C19.2536 -0.00861209 20.3811 0.32706 21.6648 1.39808L21.6661 1.3995ZM1.78069 5.57833V21.5298L8.28627 23.5908V7.59378L1.78069 5.57833ZM12.7467 6.45165L10.067 7.32354V23.3661L16.833 21.3833V16.6967C16.833 16.179 17.2325 15.7594 17.724 15.7594C18.2156 15.7594 18.6137 16.179 18.6137 16.6982V21.2169L24.9363 23.1158V7.36336L23.4401 6.62375C23.4148 6.78021 23.3827 6.93382 23.3426 7.08316C23.0521 8.17375 22.5648 9.19361 21.9079 10.0857L18.599 14.485C18.5119 14.6007 18.4006 14.6931 18.2741 14.7549C18.1475 14.8168 18.0091 14.8463 17.87 14.8412C17.7308 14.8361 17.5946 14.7965 17.4724 14.7255C17.3501 14.6545 17.2451 14.5542 17.1657 14.4324L14.0732 9.66328C13.5629 8.90376 13.2049 8.22672 13.0032 7.62081C12.8765 7.24263 12.7905 6.85041 12.7467 6.45165ZM17.863 1.94141C16.8931 1.99119 15.8966 2.40652 15.4224 2.99679C14.852 3.70796 14.5714 4.37361 14.5153 5.0478C14.4485 5.85995 14.494 6.43316 14.6837 7.00067C14.8239 7.42026 15.1031 7.95221 15.5346 8.59369L17.9538 12.3231L20.5053 8.93078C21.02 8.23036 21.4016 7.42983 21.6287 6.57397C21.9493 5.3792 21.4658 3.62404 20.5601 2.8702C19.6316 2.09503 18.9303 1.88594 17.8643 1.94141H17.863ZM18.0473 2.93278C19.5221 2.93278 20.719 4.19155 20.719 5.74474C20.7171 6.11619 20.6465 6.4836 20.5111 6.82597C20.3758 7.16834 20.1784 7.47897 19.9303 7.7401C19.6822 8.00123 19.3882 8.20776 19.0651 8.34788C18.742 8.48799 18.3962 8.55895 18.0473 8.55671C16.5725 8.55671 15.3756 7.29794 15.3756 5.74474C15.3756 4.19155 16.5725 2.93278 18.0473 2.93278ZM18.0473 4.80742C17.931 4.80667 17.8157 4.83032 17.708 4.87702C17.6003 4.92372 17.5022 4.99256 17.4195 5.0796C17.3368 5.16664 17.2709 5.27017 17.2258 5.3843C17.1806 5.49843 17.157 5.62091 17.1563 5.74474C17.1563 6.26248 17.5557 6.68206 18.0473 6.68206C18.1636 6.68263 18.2789 6.65879 18.3866 6.61192C18.4942 6.56505 18.5921 6.49605 18.6748 6.40888C18.7574 6.32171 18.8231 6.21807 18.868 6.10387C18.913 5.98967 18.9365 5.86716 18.937 5.74332C18.9352 5.49371 18.8406 5.25503 18.6738 5.0796C18.507 4.90416 18.2818 4.80629 18.0473 4.80742Z" fill="#333333" fillOpacity="0.75" />
                </svg>
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
            <a href="https://instagram.com/bungalowsentermasbasavilbaso?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9999 8.00001C10.9391 8.00001 9.92164 8.42144 9.17149 9.17158C8.42135 9.92173 7.99992 10.9391 7.99992 12C7.99992 13.0609 8.42135 14.0783 9.17149 14.8284C9.92164 15.5786 10.9391 16 11.9999 16C13.0608 16 14.0782 15.5786 14.8283 14.8284C15.5785 14.0783 15.9999 13.0609 15.9999 12C15.9999 10.9391 15.5785 9.92173 14.8283 9.17158C14.0782 8.42144 13.0608 8.00001 11.9999 8.00001Z" fill="#254B5E" />
                <path fillRule="evenodd" clipRule="evenodd" d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2V16.8C0 18.7096 0.758569 20.5409 2.10883 21.8912C3.45909 23.2414 5.29044 24 7.2 24H16.8C18.7096 24 20.5409 23.2414 21.8912 21.8912C23.2414 20.5409 24 18.7096 24 16.8V7.2C24 5.29044 23.2414 3.45909 21.8912 2.10883C20.5409 0.758569 18.7096 0 16.8 0H7.2ZM6.4 12C6.4 10.5148 6.99 9.09041 8.0402 8.0402C9.09041 6.99 10.5148 6.4 12 6.4C13.4852 6.4 14.9096 6.99 15.9598 8.0402C17.01 9.09041 17.6 10.5148 17.6 12C17.6 13.4852 17.01 14.9096 15.9598 15.9598C14.9096 17.01 13.4852 17.6 12 17.6C10.5148 17.6 9.09041 17.01 8.0402 15.9598C6.99 14.9096 6.4 13.4852 6.4 12ZM17.6 6.4H19.2V4.8H17.6V6.4Z" fill="#254B5E" />
              </svg>
            </a>
          </li>
          <li className="footer_redes_list_item">
            <a href="https://www.facebook.com/profile.php?id=100093982128833&mibextid=ZbWKwL" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M23.04 0H0.96C0.429 0 0 0.429 0 0.96V23.04C0 23.571 0.429 24 0.96 24H23.04C23.571 24 24 23.571 24 23.04V0.96C24 0.429 23.571 0 23.04 0ZM20.268 7.005H18.351C16.848 7.005 16.557 7.719 16.557 8.769V11.082H20.145L19.677 14.703H16.557V24H12.816V14.706H9.687V11.082H12.816V8.412C12.816 5.313 14.709 3.624 17.475 3.624C18.801 3.624 19.938 3.723 20.271 3.768V7.005H20.268Z" fill="#254B5E" />
              </svg>
            </a>
          </li>
          <li className="footer_redes_list_item">
            <a onClick={handleContacto}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C9.87934 24.0034 7.796 23.4422 5.96401 22.374L0.00481688 24L1.62722 18.0384C0.558128 16.2058 -0.00352605 14.1216 1.66563e-05 12C1.66563e-05 5.3724 5.37241 0 12 0ZM7.91041 6.36L7.67041 6.3696C7.51504 6.37906 7.36319 6.41988 7.22401 6.4896C7.09384 6.56331 6.97501 6.65547 6.87121 6.7632C6.72721 6.8988 6.64561 7.0164 6.55801 7.1304C6.11416 7.70748 5.87518 8.41597 5.87881 9.14399C5.88121 9.73199 6.03481 10.3044 6.27481 10.8396C6.76561 11.922 7.57321 13.068 8.63881 14.13C8.89561 14.3856 9.14761 14.6424 9.41881 14.8812C10.7429 16.0469 12.3207 16.8876 14.0268 17.3364L14.7084 17.4408C14.9304 17.4528 15.1524 17.436 15.3756 17.4252C15.7251 17.4071 16.0663 17.3125 16.3752 17.148C16.5324 17.067 16.6857 16.979 16.8348 16.884C16.8348 16.884 16.8864 16.8504 16.9848 16.776C17.1468 16.656 17.2464 16.5708 17.3808 16.4304C17.4804 16.3272 17.5668 16.206 17.6328 16.068C17.7264 15.8724 17.82 15.4992 17.8584 15.1884C17.8872 14.9508 17.8788 14.8212 17.8752 14.7408C17.8704 14.6124 17.7636 14.4792 17.6472 14.4228L16.9488 14.1096C16.9488 14.1096 15.9048 13.6548 15.2664 13.3644C15.1996 13.3352 15.128 13.3185 15.0552 13.3152C14.9731 13.3068 14.8901 13.316 14.8119 13.3423C14.7337 13.3686 14.662 13.4113 14.6016 13.4676C14.5956 13.4652 14.5152 13.5336 13.6476 14.5848C13.5978 14.6517 13.5292 14.7023 13.4506 14.7301C13.3719 14.7578 13.2868 14.7616 13.206 14.7408C13.1278 14.7198 13.0512 14.6934 12.9768 14.6616C12.828 14.5992 12.7764 14.5752 12.6744 14.532C11.9857 14.2314 11.348 13.8254 10.7844 13.3284C10.6332 13.1964 10.4928 13.0524 10.3488 12.9132C9.87671 12.4611 9.46528 11.9496 9.12481 11.3916L9.05401 11.2776C9.00316 11.201 8.96204 11.1184 8.93161 11.0316C8.88601 10.8552 9.00481 10.7136 9.00481 10.7136C9.00481 10.7136 9.29641 10.3944 9.43201 10.2216C9.56401 10.0536 9.67561 9.89039 9.74761 9.77399C9.88921 9.54599 9.93361 9.31199 9.85921 9.13079C9.52321 8.30999 9.17521 7.49279 8.81761 6.6816C8.74681 6.5208 8.53681 6.4056 8.34601 6.3828C8.28121 6.3756 8.21641 6.3684 8.15161 6.3636C7.99046 6.35559 7.82897 6.35719 7.66801 6.3684L7.90921 6.3588L7.91041 6.36Z" fill="#254B5E" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_separador"></div>
      <div className="footer_devs">
        <span className="autor">
          <p>© Helios 2023</p>
        </span>
        <span className="autor_logo">
          <Link onClick={handleContacto}><img src={imagenesFooter[1]} alt="Helios Web Desing" /></Link>
        </span>
      </div>
    </footer>
  );
}