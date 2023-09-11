import React from 'react'
import { Link } from 'react-router-dom';

export default function BungalowsList() {

    const listaBungalows = [
        {
            nombre: 'Bungalow 1',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            nombre: 'Bungalow 2',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            nombre: 'Bungalow 3',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            nombre: 'Bungalow 4',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        },
        {
            nombre: 'Bungalow 5',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut hic eveniet quo, tenetur pariatur voluptas officia nemo, voluptatum nihil, et alias accusantium totam nostrum aut error placeat sunt reiciendis dicta.',
            imagenes: ['../assets/bungalow1.jpg', '../assets/bungalow2.jpg', '../assets/bungalow3.jpg', '../assets/bungalow4.jpg']
        }
    ]
    return (
        <div>
            {listaBungalows.map((bungalow, index) => (
                <div key={index} className='bungalows_main_list_bungalow'>
                    <div className='bungalows_main_list_bungalow_info'>
                    <h2>{bungalow.nombre}</h2>
                    <p>{bungalow.description}</p>
                    </div>                    
                    <div className='bungalows_main_list_bungalow_imagenes'>
                        {bungalow.imagenes.map((imagen, i) => (
                            <img key={i} src={imagen} alt={`Imagen ${i}`} />
                        ))}
                    </div>
                    <Link to="/bungalow" className='btn-accion'>Reservar</Link>
                </div>
            ))}
        </div>
    );
};