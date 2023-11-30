import { Link } from 'react-router-dom'
import logokasa from '../assets/LOGO.svg'
import '../style/Header.scss'

function Header() {
    return (
        <header className = "header">
                <img className= "header__logo" src={logokasa} alt="logo Kasa" />
                <nav className = "header__nav">
                    <Link className='header__link' to="/">Accueil</Link>
                    <Link className='header__link' to="/About">A Propos</Link>
                </nav>
        </header>
    )
}

export default Header