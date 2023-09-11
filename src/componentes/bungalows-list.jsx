import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function BungalowsList() {

    const listaBungalows = [
        {
            id: 1,
            nombre: 'Bungalow 1',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            id: 2,
            nombre: 'Bungalow 2',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            id: 3,
            nombre: 'Bungalow 3',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            id: 4,
            nombre: 'Bungalow 4',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            id: 5,
            nombre: 'Bungalow 5',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        }
    ]
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
                    <HashLink to="/bungalow#header" className='btn-accion'>Reservar</HashLink>
                </div>
            ))}
        </div>
    );
}