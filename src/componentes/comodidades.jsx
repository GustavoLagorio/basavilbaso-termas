import React from 'react'

const listaComodidades = {
    wifi: 'assets/icons/wifi.png',
    cocina: 'assets/icons/wifi.png',
    heladera: 'assets/icons/wifi.png',
    parking: 'assets/icons/wifi.png',
    tv: 'assets/icons/wifi.png',
    parrilla: 'assets/icons/wifi.png',
    pileta: 'assets/icons/wifi.png',
    personas: 'assets/icons/wifi.png',
    toallas: 'assets/icons/wifi.png',
    vajilla: 'assets/icons/wifi.png',
    // microondas: '',
    // netflix: '',
    // aire: '',
    // pava: '',
    // vajilla: '',
    // secador: '',
    // caja: '',
    // electrodomesticos: '',
    // lavarropas: ''
}

export const Comodidades = ({comodidades}) => {

    
    return (
        <ul className="bungalow_main_comodidades_list">

            {comodidades.map((comodidad) => (
                <li key={comodidad} className="bungalow_main_comodidades_list_item">
                    <img src={`/assets/icons/${comodidad}.png`} alt={`${comodidad}`} />
                </li>
            ))}
        </ul>
    )
}
