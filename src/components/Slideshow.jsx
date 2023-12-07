import { useState } from 'react';
import PropTypes from 'prop-types';
import leftarrow from '../assets/arrow_left.png';
import rightarrow from '../assets/arrow_right.png';
import '../style/Slideshow.scss';

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className='slideshow'>
      <img className='slideshow__img' src={pictures[currentIndex]} alt='image du Carrousel' />
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
    </div>
  );
}

export default Slideshow;
