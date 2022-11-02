import React from "react";
import logo from '../images/logo.png';

export const Header = () => {
    return (
        <nav>
            <div className='container'>
                <a className="navigation-brand" href='/'>
                    <img src={logo} alt='Logo'/>                    
                </a>
            </div>
        </nav>
    )
}