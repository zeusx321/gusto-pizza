import searchIcon from '../assets/search.svg';
import menuIcon from '../assets/menu.svg';
import '../css/style.css'

const navBar = {
    one: ['Menu', '#menu'],
}

function Header(){
    return(
        
            <header>
                <nav class="header__nav">
                    <div class="header__logo">
                    <h4>Gusto Pizza</h4>
                    <div class="header__logo-overlay"></div>
                    </div>
                    <ul class="header__menu">
                    <li>
                        <a href={navBar.one[0]}>{navBar.one[0]}</a>
                    </li>
                    <li>
                        <a href="#food">Food</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#about-us">About Us</a>
                    </li>
                    <li>
                        <img src={searchIcon} alt="Search"/>
                    </li>
                    </ul>

                    <ul class="header__menu-mobile">
                    <img src={menuIcon} alt="Search"/>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;