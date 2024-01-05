
export const Descripcion = ({ idBungalow }) => {

    const index = idBungalow - 1

    const descripcion = [
        {
            desc: `<p className="texto">Añil sinónimo de variedades oscuras y profundas del color azul, cuyas pinceladas se combinan y entremezclan con otros tonos que, en contraste con el blanco, otorgan armonía y sobriedad.</p> 
          <p className="texto">Añil un bungalow que resalta la belleza del lugar y crea un espacio de tranquilidad y libertad. La propuesta es que vivas un descanso inolvidable. ¡Reservá ahora!</p>
          <p className="texto" id="texto">En Añil 1 hasta 4 personas podran disfrutar de:</p>`,
            iconos: [
                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"/></svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m240.801 293.826l-23.851 23.851l23.8 47.6l23.417-24.718zm15.177 101.906l22.299 44.6l23.418-24.719l-22.3-44.599zM438.926 202.62L415.8 227.032l44.423 21.246l23.127-24.412zm-96.323-10.596l42.861 20.499l23.127-24.411l-41.992-20.084zm-34.818 149.022l28.523 38.031l22.325-23.565l-28.523-38.031zm2.848-49.534l-28.936-38.582l-22.857 22.857l29.468 39.29zm-9.89-57.628l36.683 29.347l22.085-23.313l-36.001-28.801zm61.758 49.407l36.721 29.377l22.085-23.313l-36.721-29.376zm-13.814-182.604l-26.24 26.239l-24.718-24.718a111.609 111.609 0 0 0-157.839 0c-.342.341-.673.689-1.009 1.034A77.974 77.974 0 0 0 16 166.988V408h32V166.988a45.975 45.975 0 0 1 72.048-37.868a111.809 111.809 0 0 0 19.842 130.929l24.717 24.717l-23.92 23.921l20 20l208-208ZM185.006 259.911l-22.489-22.489A79.611 79.611 0 0 1 275.1 124.835l22.489 22.49Z"/></svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="67" height="41" viewBox="0 0 67 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.95 0.25C59.6154 0.25 62.1717 1.30357 64.0564 3.17893C65.9412 5.0543 67 7.59784 67 10.25V30.25C67 32.9022 65.9412 35.4457 64.0564 37.3211C62.1717 39.1964 59.6154 40.25 56.95 40.25H10.05C7.38457 40.25 4.82832 39.1964 2.94358 37.3211C1.05884 35.4457 0 32.9022 0 30.25V10.25C0 7.59784 1.05884 5.0543 2.94358 3.17893C4.82832 1.30357 7.38457 0.25 10.05 0.25H56.95ZM56.95 6.91667H10.05C9.22947 6.91677 8.43752 7.21652 7.82435 7.75905C7.21119 8.30158 6.81945 9.04916 6.72345 9.86L6.7 10.25V30.25C6.70011 31.0664 7.00135 31.8545 7.5466 32.4646C8.09184 33.0747 8.84316 33.4645 9.65805 33.56L10.05 33.5833V26.9167C10.0501 26.1002 10.3514 25.3122 10.8966 24.7021C11.4418 24.092 12.1932 23.7022 13.008 23.6067L13.4 23.5833H53.6C54.4205 23.5834 55.2125 23.8832 55.8256 24.4257C56.4388 24.9682 56.8305 25.7158 56.9265 26.5267L56.95 26.9167V33.5833C57.7705 33.5832 58.5625 33.2835 59.1756 32.7409C59.7888 32.1984 60.1805 31.4508 60.2766 30.64L60.3 30.25V10.25C60.2999 9.43356 59.9986 8.64554 59.4534 8.03543C58.9082 7.42531 58.1568 7.03552 57.3419 6.94L56.95 6.91667ZM50.25 30.25H16.75V33.5833H50.25V30.25ZM50.25 10.25C51.1385 10.25 51.9906 10.6012 52.6188 11.2263C53.2471 11.8514 53.6 12.6993 53.6 13.5833C53.6 14.4674 53.2471 15.3152 52.6188 15.9404C51.9906 16.5655 51.1385 16.9167 50.25 16.9167C49.3615 16.9167 48.5094 16.5655 47.8812 15.9404C47.2529 15.3152 46.9 14.4674 46.9 13.5833C46.9 12.6993 47.2529 11.8514 47.8812 11.2263C48.5094 10.6012 49.3615 10.25 50.25 10.25Z" fill="#333333"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="47" viewBox="0 0 56 47" fill="none">
                <path d="M50.9091 0.25H5.09091C2.29091 0.25 0 2.55 0 5.36111V36.0278C0 38.8389 2.29091 41.1389 5.09091 41.1389H17.8182V46.25H38.1818V41.1389H50.9091C53.7091 41.1389 55.9745 38.8389 55.9745 36.0278L56 5.36111C56 2.55 53.7091 0.25 50.9091 0.25ZM50.9091 36.0278H5.09091V5.36111H50.9091V36.0278Z" fill="#333333"/>
                </svg>`                
            ],
            caracteristica: ['1 dormitorio muy confortable', '1 baño con cabina de ducha', '2 AA (uno en cada habitación)', '2 Smart TV (uno en cada habitación, una con Netflix)']
        },
        {
            desc: `<p className="texto">Añil sinónimo de variedades oscuras y profundas del color azul, cuyas pinceladas se combinan y entremezclan con otros tonos que, en contraste con el blanco, otorgan armonía y sobriedad.</p> 
          <p className="texto">Añil un bungalow que resalta la belleza del lugar y crea un espacio de tranquilidad y libertad. La propuesta es que vivas un descanso inolvidable. ¡Reservá ahora!</p>
          <p className="texto" id="texto">En Añil 2 hasta 6 personas podran disfrutar de:</p>`,
            iconos: [
                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"/></svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m240.801 293.826l-23.851 23.851l23.8 47.6l23.417-24.718zm15.177 101.906l22.299 44.6l23.418-24.719l-22.3-44.599zM438.926 202.62L415.8 227.032l44.423 21.246l23.127-24.412zm-96.323-10.596l42.861 20.499l23.127-24.411l-41.992-20.084zm-34.818 149.022l28.523 38.031l22.325-23.565l-28.523-38.031zm2.848-49.534l-28.936-38.582l-22.857 22.857l29.468 39.29zm-9.89-57.628l36.683 29.347l22.085-23.313l-36.001-28.801zm61.758 49.407l36.721 29.377l22.085-23.313l-36.721-29.376zm-13.814-182.604l-26.24 26.239l-24.718-24.718a111.609 111.609 0 0 0-157.839 0c-.342.341-.673.689-1.009 1.034A77.974 77.974 0 0 0 16 166.988V408h32V166.988a45.975 45.975 0 0 1 72.048-37.868a111.809 111.809 0 0 0 19.842 130.929l24.717 24.717l-23.92 23.921l20 20l208-208ZM185.006 259.911l-22.489-22.489A79.611 79.611 0 0 1 275.1 124.835l22.489 22.49Z"/></svg>`, 
                `<svg xmlns="http://www.w3.org/2000/svg" width="67" height="41" viewBox="0 0 67 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.95 0.25C59.6154 0.25 62.1717 1.30357 64.0564 3.17893C65.9412 5.0543 67 7.59784 67 10.25V30.25C67 32.9022 65.9412 35.4457 64.0564 37.3211C62.1717 39.1964 59.6154 40.25 56.95 40.25H10.05C7.38457 40.25 4.82832 39.1964 2.94358 37.3211C1.05884 35.4457 0 32.9022 0 30.25V10.25C0 7.59784 1.05884 5.0543 2.94358 3.17893C4.82832 1.30357 7.38457 0.25 10.05 0.25H56.95ZM56.95 6.91667H10.05C9.22947 6.91677 8.43752 7.21652 7.82435 7.75905C7.21119 8.30158 6.81945 9.04916 6.72345 9.86L6.7 10.25V30.25C6.70011 31.0664 7.00135 31.8545 7.5466 32.4646C8.09184 33.0747 8.84316 33.4645 9.65805 33.56L10.05 33.5833V26.9167C10.0501 26.1002 10.3514 25.3122 10.8966 24.7021C11.4418 24.092 12.1932 23.7022 13.008 23.6067L13.4 23.5833H53.6C54.4205 23.5834 55.2125 23.8832 55.8256 24.4257C56.4388 24.9682 56.8305 25.7158 56.9265 26.5267L56.95 26.9167V33.5833C57.7705 33.5832 58.5625 33.2835 59.1756 32.7409C59.7888 32.1984 60.1805 31.4508 60.2766 30.64L60.3 30.25V10.25C60.2999 9.43356 59.9986 8.64554 59.4534 8.03543C58.9082 7.42531 58.1568 7.03552 57.3419 6.94L56.95 6.91667ZM50.25 30.25H16.75V33.5833H50.25V30.25ZM50.25 10.25C51.1385 10.25 51.9906 10.6012 52.6188 11.2263C53.2471 11.8514 53.6 12.6993 53.6 13.5833C53.6 14.4674 53.2471 15.3152 52.6188 15.9404C51.9906 16.5655 51.1385 16.9167 50.25 16.9167C49.3615 16.9167 48.5094 16.5655 47.8812 15.9404C47.2529 15.3152 46.9 14.4674 46.9 13.5833C46.9 12.6993 47.2529 11.8514 47.8812 11.2263C48.5094 10.6012 49.3615 10.25 50.25 10.25Z" fill="#333333"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="47" viewBox="0 0 56 47" fill="none">
                <path d="M50.9091 0.25H5.09091C2.29091 0.25 0 2.55 0 5.36111V36.0278C0 38.8389 2.29091 41.1389 5.09091 41.1389H17.8182V46.25H38.1818V41.1389H50.9091C53.7091 41.1389 55.9745 38.8389 55.9745 36.0278L56 5.36111C56 2.55 53.7091 0.25 50.9091 0.25ZM50.9091 36.0278H5.09091V5.36111H50.9091V36.0278Z" fill="#333333"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                <path d="M14 8.86539C13.01 8.86539 12.0298 9.06037 11.1152 9.43922C10.2005 9.81806 9.36951 10.3733 8.6695 11.0733C7.96949 11.7734 7.41421 12.6044 7.03537 13.519C6.65653 14.4336 6.46154 15.4139 6.46154 16.4038C6.46154 17.3938 6.65653 18.3741 7.03537 19.2887C7.41421 20.2033 7.96949 21.0343 8.6695 21.7343C9.36951 22.4344 10.2005 22.9896 11.1152 23.3685C12.0298 23.7473 13.01 23.9423 14 23.9423C15.9993 23.9423 17.9168 23.1481 19.3305 21.7343C20.7442 20.3206 21.5385 18.4032 21.5385 16.4038C21.5385 14.4045 20.7442 12.4871 19.3305 11.0733C17.9168 9.65961 15.9993 8.86539 14 8.86539ZM8.61539 16.4038C8.61463 15.0091 9.15509 13.6685 10.123 12.6643C11.0908 11.6601 12.4106 11.0705 13.8044 11.0199C15.1982 10.9692 16.5573 11.4614 17.5955 12.3927C18.6338 13.324 19.2701 14.6218 19.3706 16.0129C19.1509 16.1913 18.9073 16.3381 18.6469 16.4491C17.8995 16.7722 16.6665 16.9638 14.5395 16.4318C12.166 15.8395 10.5657 16.1917 9.44785 16.8852C9.16785 17.0597 8.92554 17.2503 8.71554 17.4409C8.64889 17.0993 8.61535 16.752 8.61539 16.4038ZM9.15385 5.63462C9.15385 6.06304 8.98365 6.47392 8.68071 6.77687C8.37777 7.07981 7.96689 7.25 7.53846 7.25C7.11004 7.25 6.69916 7.07981 6.39621 6.77687C6.09327 6.47392 5.92308 6.06304 5.92308 5.63462C5.92308 5.20619 6.09327 4.79531 6.39621 4.49237C6.69916 4.18942 7.11004 4.01923 7.53846 4.01923C7.96689 4.01923 8.37777 4.18942 8.68071 4.49237C8.98365 4.79531 9.15385 5.20619 9.15385 5.63462ZM15.0769 4.55769C14.7913 4.55769 14.5174 4.67115 14.3154 4.87312C14.1135 5.07508 14 5.349 14 5.63462C14 5.92023 14.1135 6.19415 14.3154 6.39612C14.5174 6.59808 14.7913 6.71154 15.0769 6.71154H20.4615C20.7472 6.71154 21.0211 6.59808 21.223 6.39612C21.425 6.19415 21.5385 5.92023 21.5385 5.63462C21.5385 5.349 21.425 5.07508 21.223 4.87312C21.0211 4.67115 20.7472 4.55769 20.4615 4.55769H15.0769ZM4.84615 0.25C3.56087 0.25 2.32824 0.760575 1.41941 1.66941C0.510575 2.57824 0 3.81087 0 5.09615V23.4038C0 24.6891 0.510575 25.9218 1.41941 26.8306C2.32824 27.7394 3.56087 28.25 4.84615 28.25H23.1538C24.4391 28.25 25.6718 27.7394 26.5806 26.8306C27.4894 25.9218 28 24.6891 28 23.4038V5.09615C28 3.81087 27.4894 2.57824 26.5806 1.66941C25.6718 0.760575 24.4391 0.25 23.1538 0.25H4.84615ZM2.15385 5.09615C2.15385 4.38211 2.4375 3.69731 2.9424 3.1924C3.44731 2.6875 4.13211 2.40385 4.84615 2.40385H23.1538C23.8679 2.40385 24.5527 2.6875 25.0576 3.1924C25.5625 3.69731 25.8462 4.38211 25.8462 5.09615V23.4038C25.8462 24.1179 25.5625 24.8027 25.0576 25.3076C24.5527 25.8125 23.8679 26.0962 23.1538 26.0962H4.84615C4.13211 26.0962 3.44731 25.8125 2.9424 25.3076C2.4375 24.8027 2.15385 24.1179 2.15385 23.4038V5.09615Z" fill="#333333"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                <path d="M17.5 35.25H7C7 34.3217 7.36875 33.4315 8.02513 32.7751C8.6815 32.1187 9.57174 31.75 10.5 31.75V10.75H0V5.5H24.5V10.75H14V31.75C14.9283 31.75 15.8185 32.1187 16.4749 32.7751C17.1313 33.4315 17.5 34.3217 17.5 35.25ZM35 0.25V35.25H31.5V23H22.75V35.25H19.25V21.25C19.25 20.3217 19.6187 19.4315 20.2751 18.7751C20.9315 18.1187 21.8217 17.75 22.75 17.75H31.5V0.25H35Z" fill="#333333"/>
                </svg>`
            ],
            caracteristica: ['2 dormitorios amplios y muy confortables', '2 baños en suite', '3 AA (uno en cada habitación)', '3 Smart TV (uno en cada habitación, una con Netflix)', 'Lavarropas automático', 'Terraza con juego patio']
        },
        {
            desc: `<p className="texto">Hermoso bungalow, con vista  abierta al predio y al campo lindero. Equipada exteriormente con  majestuosa parrilla con fogonero, mesada con bacha y LEÑA. Para que puedas preparar el mejor asado en el exterior. Donde podrás  disfrutar  de todo el paisaje y además apreciar maravillosos amaneceres y atardeceres  rodeado de  nuestra fauna autóctona. </p>
          <p className="texto">Todo esto es LA MERY. Un lugar donde podes relajarte y pasar momentos mágicos. </p>
          <p className="texto" id="texto">Para destacar podemos mencionar:</p>`,
            iconos: [
                `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"/></svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="m240.801 293.826l-23.851 23.851l23.8 47.6l23.417-24.718zm15.177 101.906l22.299 44.6l23.418-24.719l-22.3-44.599zM438.926 202.62L415.8 227.032l44.423 21.246l23.127-24.412zm-96.323-10.596l42.861 20.499l23.127-24.411l-41.992-20.084zm-34.818 149.022l28.523 38.031l22.325-23.565l-28.523-38.031zm2.848-49.534l-28.936-38.582l-22.857 22.857l29.468 39.29zm-9.89-57.628l36.683 29.347l22.085-23.313l-36.001-28.801zm61.758 49.407l36.721 29.377l22.085-23.313l-36.721-29.376zm-13.814-182.604l-26.24 26.239l-24.718-24.718a111.609 111.609 0 0 0-157.839 0c-.342.341-.673.689-1.009 1.034A77.974 77.974 0 0 0 16 166.988V408h32V166.988a45.975 45.975 0 0 1 72.048-37.868a111.809 111.809 0 0 0 19.842 130.929l24.717 24.717l-23.92 23.921l20 20l208-208ZM185.006 259.911l-22.489-22.489A79.611 79.611 0 0 1 275.1 124.835l22.489 22.49Z"/></svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="51" viewBox="0 0 40 51" fill="none">
                <path d="M10 15.25H15V7.75H10V15.25ZM10 37.75H15V25.25H10V37.75ZM0 50.25V22.75H40V50.25H0ZM0 17.75V0.25H40V17.75H0Z" fill="#333333"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="47" viewBox="0 0 56 47" fill="none">
                <path d="M50.9091 0.25H5.09091C2.29091 0.25 0 2.55 0 5.36111V36.0278C0 38.8389 2.29091 41.1389 5.09091 41.1389H17.8182V46.25H38.1818V41.1389H50.9091C53.7091 41.1389 55.9745 38.8389 55.9745 36.0278L56 5.36111C56 2.55 53.7091 0.25 50.9091 0.25ZM50.9091 36.0278H5.09091V5.36111H50.9091V36.0278Z" fill="#333333"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                <path d="M17.5 35.25H7C7 34.3217 7.36875 33.4315 8.02513 32.7751C8.6815 32.1187 9.57174 31.75 10.5 31.75V10.75H0V5.5H24.5V10.75H14V31.75C14.9283 31.75 15.8185 32.1187 16.4749 32.7751C17.1313 33.4315 17.5 34.3217 17.5 35.25ZM35 0.25V35.25H31.5V23H22.75V35.25H19.25V21.25C19.25 20.3217 19.6187 19.4315 20.2751 18.7751C20.9315 18.1187 21.8217 17.75 22.75 17.75H31.5V0.25H35Z" fill="#333333"/>
                </svg>`
            ],
            caracteristica: ['1 dormitorio muy luminoso con ventilador de techo', '1 baño grande  con mampara', '1 heladera CON FREEZER', '1 Smart TV con Youtube y Netflix', '1 mesa exterior con sillas']
        }
    ]
    const texto = descripcion[index].desc
    return (
        <div className="bungalow_main_descripcion">
            <div className="desc" dangerouslySetInnerHTML={{ __html: texto }} />
            <ul className="bungalow_main_descripcion_list">
                {descripcion[index].iconos.map((icono, i) => {
                    
                    const nombre = descripcion[index].caracteristica[i];

                    return (
                        <li key={i} className={'bungalow_main_descripcion_list_item'}>
                            <div dangerouslySetInnerHTML={{ __html: icono }} />
                            <div className="nombre_item">
                                {nombre}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}