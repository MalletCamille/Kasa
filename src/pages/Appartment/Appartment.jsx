import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import PropTypes from 'prop-types';
import json from '../../../data/appartments.json';
import '../../style/Appartment.scss';
import '../../style/Tag.scss';
import Collapse from '../../components/Collapse.jsx';
import starfilled from '../../assets/star-active.png';
import starempty from '../../assets/star-inactive.png';
import '../../style/Slideshow.scss';
import { useEffect } from 'react';

//* Définition du type de propriété attendue pour le composant Appartment *//
Appartment.propTypes = {
  cover: PropTypes.string
};

function Appartment() {
  const navigate = useNavigate();
  const { appartmentid } = useParams();
   //* Recherche de l'appartement actuel dans les données JSON en fonction de l'ID fourni dans l'URL *//
  const currentappartment = json.find(appartment => appartment.id === appartmentid);

  //* Utilisation de useEffect pour gérer la navigation vers la page d'erreur si l'appartement n'est pas trouvé *//
  useEffect(() => {
    if (!currentappartment) { 
      navigate("/Error");
      return;
    }
  }, [currentappartment, navigate])

  if (!currentappartment) {
    return null;
  }
//* Fonction pour rendre les étoiles de notation en fonction du rating de l'appartement *//
  const renderRatingStars = () => {
    const rating = parseInt(currentappartment.rating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img className='rating__star' key={i} src={starfilled} alt="Étoile remplie" />);
      } else {
        stars.push(<img className='rating__star' key={i} src={starempty} alt="Étoile vide" />);
      }
    }

    return stars;
  };

  return (
    <div className='appartment__container'>
      <div className='wrapper'>
        <Slideshow pictures={currentappartment.pictures} />
        <div className='tags-host__container'>
          <div className='appartmenttags__wrap'>
            <div className='appartment__infos'>
              <h1 className='appartment__title'>{currentappartment.title}</h1>
              <p className='appartment__location'>{currentappartment.location}</p>
            </div>
            <div className='tags__container'>
              {currentappartment.tags.map((tag, index) => (
                <Tag key={index} description={tag} className='appartment__tag' />
              ))}
            </div>
          </div>
          <div className='hostrating__wrap'>
            <div className='host'>
              <span className='host__name'>{currentappartment.host.name}</span>
              <img className='host__pix' src={currentappartment.host.picture} alt="Photo de l'hôte" />
            </div>
            <div className='rating__container'>
              {renderRatingStars()}
            </div>
          </div>
        </div>
        <div className='collapse__content'>
        <Collapse className='collapse' collapsename="Description">
          <span className='collapse__text'>{currentappartment.description}</span>
        </Collapse>
        <Collapse className='collapse collapse__equipments' collapsename="Equipements">
          <div className='collapse__text'>
            {currentappartment.equipments.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))}
          </div>
        </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Appartment;
