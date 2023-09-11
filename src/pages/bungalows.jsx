import BungalowsList from "../componentes/bungalows-list";
import Calendario from "../componentes/calendario";

import "../styles/bungalows.css";

const Bungalows = () => {

    return (
        <main className="bungalows_main" id="bungalows">
            <div className="bungalows_main_titulo">
                <h1>Bungalows</h1>
            </div>            
                <form action="" className="bungalows_main_filtro">
                    <Calendario />
                    <button type="submit" className="btn-accion">Filtrar</button>
                </form>
            <div className="bungalows_main_list">
                <BungalowsList />
            </div>
        </main>
    )
}

export default Bungalows