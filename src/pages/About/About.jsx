import Banner from '../../components/Banner.jsx'
import imgbannerabout from '../../assets/Banner_About.png'
import Collapse from '../../components/Collapse.jsx'
import { Fragment } from 'react'
import '../../style/Collapse.scss'

function About() {
    return (
      <Fragment>
        <div className="banner__about">
           <Banner Tagline={false} image={imgbannerabout} />
        </div>
        <div className='collapse__container'>
          <Collapse collapsename="Fiabilité">
            <span className='collapse__text'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</span>  
          </Collapse>  
          {/* <div className="collapse__details">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</div>
          <Collapse collapsename="Respect" />
          <div className="collapse__details">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
          <Collapse collapsename="Service" />
          <div className="collapse__details">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
          <Collapse collapsename="Sécurité" />
          <div className="collapse__details">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</div> */}
        </div>
     </Fragment> 
  )
}

export default About