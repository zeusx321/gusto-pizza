import React, { useState } from 'react';
import menuIcon from '../../assets/menu.svg';
import '../../css/style.css';
import { NAV_LINKS } from '../../constants';

function Header({ isHome = false }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className={isHome ? 'header--home' : 'header--solid'}>
            <nav className="header__nav">
                <div className="header__logo">
                    <a href='/'>Gusto Pizza</a>
                    {isHome && <div className="header__logo-overlay"></div>}
                </div>
                <ul className="header__menu">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <button 
                    className="header__menu-mobile-btn" 
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation"
                >
                    <img src={menuIcon} alt="Menu" />
                </button>

                <div className="header__mobile-dropdown" 
                    style={{ display: isMenuOpen ? 'block' : 'none' }}
                >
                    <ul>
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;