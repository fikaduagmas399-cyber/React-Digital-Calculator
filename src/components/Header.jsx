import React from 'react';
import './Styles.css';
function Header() {
    return(
        <header className='header'>
            <nav className="nav">
                <ul className="nav-link">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;