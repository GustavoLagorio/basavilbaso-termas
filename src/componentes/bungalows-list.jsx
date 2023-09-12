import React from 'react'
import listaBungalows from '../../lista-bungalows';
import { HashLink } from 'react-router-hash-link';



export default function BungalowsList() {

    return (
        <div>
            {listaBungalows.map((bungalow) => (
                <div key={bungalow.id} className='bungalows_main_list_bungalow'>
                    <div className='bungalows_main_list_bungalow_info'>
                        <h2>{bungalow.nombre}</h2>
                        <p>{bungalow.description}</p>
                    </div>
                    <div className='bungalows_main_list_bungalow_imagenes'>
                        {bungalow.imagenes.map((imagen, i) => (
                            <img key={i} src={imagen} alt={`Imagen ${i}`} />
                        ))}
                    </div>
                    <HashLink to={`/bungalows/${bungalow.id}#header`} className='btn-accion'>Reservar</HashLink>
                </div>
            ))}
        </div>
    );
}