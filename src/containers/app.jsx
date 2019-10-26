import React from "react";
import Header from "../component/header";
import Search from "../component/Search";
import Categorias from "../component/Categorias";
import Carrusel from "../component/carousel";
import CarruselItem from "../component/carousel-item";
import Footer from "../component/footer";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/app.scss";

const API = 'http://localhost:8080/initalState.json';

const App = (props) => {

    const dato = useInitialState(API);
    const initalState = dato.initalState;
    if(!initalState) return null
    console.log(dato)
    

    return(
        <>
            <Header />
            <Search />

                <Categorias title="Mi Lista">
                    <Carrusel>
                        <CarruselItem />
                    </Carrusel>
                </Categorias>

            <Categorias title="Tendencias">
                <Carrusel>
                {initalState.trends.map( valor => (
                    <CarruselItem key={valor.id}  {...valor} />
                ))}
                </Carrusel>
            </Categorias>


            <Categorias title="Originales de Platzi">
                <Carrusel>
                    <CarruselItem />
                </Carrusel>
            </Categorias>

            <Footer />
        </>
    );
}

export default App;