import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag'
import PropTypes from 'prop-types'
import json from '../../../data/appartments.json'
import '../../style/Appartment.scss'
import '../../style/Tag.scss'

Appartment.propTypes = {
  cover: PropTypes.string.isRequired
 }


 function Appartment() {
  const { appartmentid } = useParams();
  const currentappartment = json.find(appartment => appartment.id === appartmentid);

  return (
    <div className='appartment__container'>
      <Slideshow cover={currentappartment.cover} />
      <h1 className='appartment__title'>{currentappartment.title}</h1>
      <p className='appartment__location'>{currentappartment.location}</p>
      <div className='tags__container'>
      {currentappartment.tags.map((tag, index) => (
        <Tag key={index} description={tag} className='appartment__tag' />
      ))}
      </div>


    </div>
  );
}

export default Appartment;