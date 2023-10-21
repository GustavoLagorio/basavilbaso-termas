import { HashLink } from 'react-router-hash-link';

export default function BungalowsList({ listaBungalows, listaBungalowsRenderizar }) {

    const bungalowsToRender = listaBungalowsRenderizar ?? listaBungalows;    

    return (
        <div>
            {bungalowsToRender.map((bungalow) => {

                const imagenes = bungalow.galeria.slice(0, 4);

                return (
                    <div key={bungalow.idBungalow} className='bungalows_main_list_bungalow'>
                        <div className='bungalows_main_list_bungalow_info'>
                            <h2>{bungalow.nombre}</h2>
                            <p>{bungalow.descripcion}</p>
                        </div>
                        <div className='bungalows_main_list_bungalow_imagenes'>
                            {imagenes.map((imagen, i) => (
                                <img key={i} src={imagen} alt={`Imagen ${i}`} />
                            ))}
                        </div>
                        <HashLink to={`/bungalows/${bungalow.idBungalow}#header`} className='btn-accion'>Reservar</HashLink>
                    </div>)
            })}
        </div>
    );
}