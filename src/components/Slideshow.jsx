 import '../style/Slideshow.scss'
 import PropTypes from 'prop-types';
 import leftarrow from '../assets/arrow_left.png'
 import rightarrow from '../assets/arrow_right.png'


Slideshow.propTypes = {
cover: PropTypes.string
}

function Slideshow({cover}) {
    return (    
        <div className='slideshow'>
            <img className='slideshow__img' src={cover} alt="image du Carrousel"></img>
            <img className='slideshow__leftarrow' src={leftarrow} alt='flèche gauche'></img>
            <img className='slideshow__rightarrow' src={rightarrow} alt='flèche droite'></img>
        </div>        
    )
}

 export default Slideshow;