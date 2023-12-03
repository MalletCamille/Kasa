import logokasa from '../assets/LOGO_white.png'
import '../style/Footer.scss'


function Footer() {
    return (
        <footer className = "footer">
                <img className= "footer__logo" src={logokasa} alt="logo Kasa" />
                <span className = "footer__copyright">© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer