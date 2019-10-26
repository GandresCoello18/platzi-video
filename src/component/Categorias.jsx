import React from "react";
import "../assets/styles/component/categorias.scss";

const Categoria = ({ children, title }) => {
    return(
        <div className="categorias">
            <h3 className="categories_title">{title}</h3>
            {children}
        </div>
    );
}

export default Categoria;