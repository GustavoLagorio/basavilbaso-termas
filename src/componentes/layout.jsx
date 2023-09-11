import { Link, Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function Layout() {
    return (
        <div>
            <Header />

            <Outlet /> {/* Punto de salida para renderizar rutas secundarias */}

            <Footer />
        </div>
    );
}