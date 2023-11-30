import bannerimg from '../assets/Banner_Home.png'
import '../style/Banner.scss'

function Banner() {
    return (
        <div className = "banner">
                <img className="banner__home" src={bannerimg} alt="Bannière page d'Accueil" />
                <span className='banner__tagline'>Chez vous, partout ailleurs</span>
        </div>
    )
}

export default Banner