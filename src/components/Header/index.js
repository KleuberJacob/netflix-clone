import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header className={props.headerBlack ? "header--black" : ""}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Logo Netflix'></img>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://cdn.icon-icons.com/icons2/2657/PNG/256/netflix_icon_161073.png' alt='profile'></img>
                </a>
            </div>
        </header>
    )
}

export default Header;