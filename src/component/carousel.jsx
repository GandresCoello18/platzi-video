import React from "react";
import "../assets/styles/component/container.scss";

const Carousel = ({children}) => {
    return(
        <>
            <section className="carousel">
                <div className="carousel__container">
                    {children}
                </div>
            </section>    
        </>
    );
}

export default Carousel;