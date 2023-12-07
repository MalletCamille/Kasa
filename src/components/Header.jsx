import { Link, useLocation } from 'react-router-dom';
import logokasa from '../assets/LOGO.svg';
import '../style/Header.scss';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logokasa} alt="logo Kasa" />
      <nav className="header__nav">
        <Link to="/" className={`header__link ${pathname === '/' ? 'active' : ''}`}>
          Accueil
        </Link>
        <Link to="/About" className={`header__link ${pathname.startsWith('/About') ? 'active' : ''}`}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;