import { useEffect, useState } from "react";
import BungalowsList from "../componentes/bungalows-list";
import CalendarioGeneral from "../componentes/CalendarioGeneral";

import "../styles/bungalows.css";

const Bungalows = () => {

    //Estado para obtener el token
    const [token, setToken] = useState(null)

    //Carga informacion del los bungalows si hay token
    const [bungalows, setBungalows] = useState([]);

    const [selectedRange, setSelectedRange] = useState(null);

    //Lista de bungalows a renderizar
    const [bungalowsList, setBungalowslist] = useState([]);

    const [listaBungalowsRenderizar, setListaBungalowsRenderizar] = useState(undefined)

    // Realizar una solicitud al servidor para obtener el token
    useEffect(() => {

        const obtenerTokenCliente = async () => {

            try {

                const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/cliente`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                })

                if (response.status === 200) {

                    const data = await response.json();
                    setToken(data.token);

                } else {

                    console.error('Error al obtener el token:', response.statusText);

                }
            } catch (error) {

                console.log(error);

            }
        }

        obtenerTokenCliente()

    }, []);//Argumento vacio para que se ejecute una vez al ejecutar el componente





    //Obtenemos los bungalows y reservas enviando el token en el header
    useEffect(() => {

        if (token) {

            const obtenerBungalows = async () => {

                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/bungalows`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-token': token
                        },
                    })

                    if (response.status === 200) {

                        //Guardamos la informacion obtenida en bungalows
                        const data = await response.json();
                        setBungalows(data.bungalows);

                    } else {

                        console.error('Error al obtener los bungalows:', response.statusText);

                    }
                } catch (error) {

                    console.log(error);

                }

            };

            //Llamamos a la ejecucion para obtener los bungalows
            obtenerBungalows();

        }
    }, [token]); //Le damos como parametro el token asi en cada cambio del token se ejecuta esta funcion

    //Evita que el calendario deje de renderizarse al hacerle click en una fecha
    const [fechas, setFechas] = useState({

        startDate: new Date(),
        endDate: new Date(),

    });

    //Guarda las fechas seleccionadas del componente Calendario
    const handleFechasSeleccionadas = (startDate, endDate) => {

        setFechas({ startDate, endDate });

    };

    // Función para manejar el rango de fechas seleccionado
    const handleRangeSelected = (rangoSeleccionado, fechasReservadas) => {
        console.log(rangoSeleccionado, fechasReservadas)


        const listaBungalowsFiltrados = []

        for (const bungalow in fechasReservadas) {
            const fechasBungalow = fechasReservadas[bungalow];

            // Verifica si alguna fecha del rangoSeleccionado está presente en el array del bungalow actual
            const estaReservada = rangoSeleccionado.some(fecha => fechasBungalow.includes(fecha));

            if (!estaReservada) {
                // Si ninguna fecha del rangoSeleccionado está reservada en este bungalow, agrégalo a la lista filtrada
                listaBungalowsFiltrados.push(parseInt(bungalow));
            }
        }

        console.log(listaBungalowsFiltrados);

        setBungalowslist(listaBungalowsFiltrados)



    };

    const handleFiltrarSubmit = async (e) => {
        console.log(bungalowsList);
        console.log(bungalows);

        e.preventDefault();

        if (bungalowsList) {

            const bungalowsSubmit= []

        bungalows.map((bungalow, index) => {

            if (bungalow.idBungalow === bungalowsList[index]) {

                bungalowsSubmit.push(bungalow)
            }
        })

        console.log(bungalowsSubmit);
        setListaBungalowsRenderizar(bungalowsSubmit)

        }

    }
    return (
        <main className="bungalows_main" id="bungalows">
            <div className="bungalows_main_titulo">
                <h1>Bungalows</h1>
            </div>
            <form className="bungalows_main_filtro" onSubmit={handleFiltrarSubmit}>
                <CalendarioGeneral
                    onFechasSeleccionadas={handleFechasSeleccionadas}
                    token={token}
                    onRangeSelected={handleRangeSelected} />
                <button type="submit" className="btn-accion">Filtrar</button>
            </form>
            <div className="bungalows_main_list">
                <BungalowsList
                    listaBungalows={bungalows}
                    rangoSeleccionado={selectedRange}
                    listaBungalowsRenderizar={listaBungalowsRenderizar} />
            </div>
        </main>
    )
}

export default Bungalows