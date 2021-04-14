import React from 'react'
import logo from '../../img/logo.png'
import image from '../../img/1.png'
import cl from './header.module.css'


const Header = () => {
    return (
        <div className={cl.header}>
            <div className={cl.logo}>
                <img src={logo} alt="logo"/>
                <p>logo</p>
            </div>
            <nav className={cl.nav}>
                <p>Username</p>
                <img src={image}/>
            </nav>
        </div>
    );
};

export default Header