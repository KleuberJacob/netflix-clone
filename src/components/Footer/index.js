import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            Feito com <span className='footer--heart' role="img" aria-label="coracao">&#10084;</span> por Kleuber Jacob<br/>
            Direitos de Imagem para Netflix<br/>
            Dados coletados do site Themoviedb.org
        </footer>
    )
};

export default Footer;