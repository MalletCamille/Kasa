import { Link } from 'react-router-dom'
//import colors from '../../utils/style/colors/colors.jsx'
import logokasa from '../assets/LOGO.svg'
import '../style/Header.scss'

function Header() {
    return (
        <header>
                <img className= "header__logo" src={logokasa} alt="logo Kasa" />
                <nav className = "header__nav">
                    <Link to="/">Accueil</Link>
                    <Link to="/survey/1">A propos</Link>
                </nav>
        </header>
    )
}

export default Header