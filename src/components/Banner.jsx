import '../style/Banner.scss'
import PropTypes from 'prop-types';

Banner.Proptypes = {
    Tagline: PropTypes.string,
    image : PropTypes.string.isRequired,
}

function Banner({ tagline, image }) {
    return (
        <div className = "banner">
                <img className="banner__home" src={image} alt="Bannière page d'Accueil" />
                {tagline && <span className='banner__tagline'>{tagline}</span>}
        </div>
    )
}

export default Banner