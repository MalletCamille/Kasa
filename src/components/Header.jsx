import { Link, useLocation } from 'react-router-dom'
import logokasa from '../assets/LOGO.svg'
import '../style/Header.scss'
import { useEffect, useState } from 'react';

function Header() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('Accueil');

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setCurrentPage('Accueil');
        } 
        else if (path === '/About') {
            setCurrentPage('About')
        }
    }, [location.pathname]);

    return (
        <header className = "header">
                <img className= "header__logo" src={logokasa} alt="logo Kasa" />
                <nav className="header__nav">
                    <Link to="/" className={`header__link ${currentPage === 'Accueil' ? 'active' : ''}`}>Accueil</Link>
                    <Link to="/About" className={`header__link ${currentPage === 'About' ? 'active' : ''}`}>A Propos</Link>
                </nav>
        </header>
    )
}

export default Header