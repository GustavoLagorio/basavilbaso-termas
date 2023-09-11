import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import Error404 from "./componentes/error-404";
import Layout from "./componentes/layout";
import Bungalows from "./pages/bungalows";
import Bungalow from "./pages/bungalow";
import Actividades from "./pages/actividades";
import Termas from "./pages/termas";
import Inmuebles from "./pages/inmuebles";
import "./styles/style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/" /* creamos nuestro path root o raiz */,
    element: <Layout />, //* tendra el elemento a renderizar que sera Layout (es proporcionar una estructura común para los componentes de la aplicación y definir elementos visuales o funcionales que se repiten en todas o varias partes de la interfaz. )
    children: [
      {
        index: true, //* esta es la pagina que se va a mostrar como raiz
        element: <Home /> //* componente que se va a mostrar
      },
      {
        path: "/bungalows", //* cuando entramos a la url
        element: <Bungalows />, //* renderizamos este componente,
        errorElement: <Error404 /> //* si la pagina no existe mostramos este componente
      }, 
      {
        path: "/bungalow", //* cuando entramos a la url
        element: <Bungalow />, //* renderizamos este componente,
        errorElement: <Error404 /> //* si la pagina no existe mostramos este componente
      },
      {
        path: "/actividades", //* cuando entramos a la url
        element: <Actividades />, //* renderizamos este componente,
        errorElement: <Error404 /> //* si la pagina no existe mostramos este componente
      },
      {
        path: "/termas", //* cuando entramos a la url
        element: <Termas />, //* renderizamos este componente,
        errorElement: <Error404 /> //* si la pagina no existe mostramos este componente
      },
      {
        path: "/inmuebles", //* cuando entramos a la url
        element: <Inmuebles />, //* renderizamos este componente,
        errorElement: <Error404 /> //* si la pagina no existe mostramos este componente
      },
      {
        path: "*", //* cualquier pagina que no sea la root o la /pagina/nueva
        element: <Error404 /> //*  renderiza error
      }
    ]
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);