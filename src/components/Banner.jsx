import bannerimg from '../assets/Banner_Home.png'
import '../style/Banner.scss'
import PropTypes from 'prop-types';

Banner.Proptypes = {
    Tagline: PropTypes.bool,
    image : PropTypes.string.isRequired,
}

function Banner({ Tagline, image }) {
    return (
        <div className = "banner">
                <img className="banner__home" src={image} alt="Bannière page d'Accueil" />
                {Tagline && <span className='banner__tagline'>Chez vous, partout ailleurs</span>}
        </div>
    )
}

export default Banner