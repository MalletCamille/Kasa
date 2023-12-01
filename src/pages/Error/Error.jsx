import Errorimg from "../../assets/404.png"
import "../../style/Error.scss"
import { Link } from 'react-router-dom'

function Error() {
    return (
      <div className="Error__container">
        <img className="Error__img" src={Errorimg} alt="Image Erreur 404"></img>
        <span className="Error__txt">Oups! La page que vous demandez n'existe pas</span>
        <Link className='Error__backtohome' to="/">Retourner sur le page d'accueil</Link>
      </div>
  )
}

export default Error