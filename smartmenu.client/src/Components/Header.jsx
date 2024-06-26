import React from 'react';
import logo from '../assets/SmartMenu-Logo.png';

function Header() {
    return (
        <header className=''>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top " id="navbar">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo do Meu Site" width="100" height="100" className="d-inline-block align-top " />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            {window.location.pathname === "/CardapioAdmin" ? (
                                <a className="nav-link" href="/">Início</a>
                            ) : (
                                ""
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
