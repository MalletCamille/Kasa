import Errorimg from "../../assets/404.png"
import "../../style/Error.scss"

function Error() {
    return (
      <div className="Error__container">
        <img className="Error__img" src={Errorimg} alt="Image Erreur 404"></img>
        <span className="Error__txt">Oups! La page que vous demandez n'existe pas</span>
        <span className="Error__backtohome">Retourner sur la page d'accueil</span>
      </div>
  )
}

export default Error