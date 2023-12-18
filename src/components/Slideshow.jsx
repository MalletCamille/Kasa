import { useState } from 'react';
import PropTypes from 'prop-types';
import leftarrow from '../assets/arrow_left.png';
import rightarrow from '../assets/arrow_right.png';
import '../style/Slideshow.scss';

//* Définition des types attendus du composant Slideshow *//
Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string), //* PropTypes.arrayof est une fonction fournie par la bibliothèque prop-types. *//
  //* Elle est utilisée pour spécifier que la propriété doit être un tableau. *//
};


function Slideshow({ pictures }) {
  //* Utilisation de useState pour gérer l'état du composant *//
  const [currentIndex, setCurrentIndex] = useState(0);
  //* On définit la variable currentIndex qui contiendra la valeur actuelle de l'index de la diapositive en cours du carrousel *//
  //* On définit la fonction setcurrentIndex qui va permettre de mettre à jour la valeur de currentIndex *//
  //* useState(0) initialise la variable currentindex avec la valeur initiale de 0 qui correspond à l'index de la 1ère image du tableau pictures *//

  //* Fonction pour passer à la diapositive suivante *//
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    //* On utilise l'opérateur modulo % pour s'assurer que l'index reste dans les limites du tableau permettant ainsi de passer à la diapositive suivante *//
    //* Tout en tenant compte de la boucle (retour à la 1ère diapositive après la dernière). *//
  };

  //* Fonction pour revenir à la diapositive précédente *//
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  // On vérifie si le tableau des pictures existe pour l'appartement en cours dans le json et si l'appartement possède plusieurs images // 
  const shouldShowControls = pictures && pictures.length > 1;

  return (
    <div className='slideshow'>
      {pictures && (
        <>
          <img className='slideshow__img' src={pictures[currentIndex]} alt='image du Carrousel' />
          {shouldShowControls && (
            <>
              <img
                className='slideshow__leftarrow'
                src={leftarrow}
                alt='flèche gauche'
                onClick={goToPrevSlide}
              />
              <img
                className='slideshow__rightarrow'
                src={rightarrow}
                alt='flèche droite'
                onClick={goToNextSlide}
              />
              <div className='slideshow__indicator'>
                {currentIndex + 1}/{pictures.length}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Slideshow;
