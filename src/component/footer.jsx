import React from "react";
import "../assets/styles/component/fotter.scss";

const Footer = (props) => {
    return(
        <>
            <footer className="footer">
                <a href="/">Terminos de uso</a>
                <a href="/">Declaración de privacidad</a>
                <a href="/">Centro de ayuda</a>
            </footer>
        </>
    );
}

export default Footer;