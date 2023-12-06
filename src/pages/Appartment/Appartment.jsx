import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag'
import PropTypes from 'prop-types'
import json from '../../../data/appartments.json'
import '../../style/Appartment.scss'
import '../../style/Tag.scss'
import Collapse from '../../components/Collapse.jsx'

Appartment.propTypes = {
  cover: PropTypes.string.isRequired
 }


 function Appartment() {
  const { appartmentid } = useParams();
  const currentappartment = json.find(appartment => appartment.id === appartmentid);

  return (
    <div className='appartment__container'>
      <Slideshow cover={currentappartment.cover} />
      <div className='appartment__wrap'>
        <div className='appartment__infos'>
          <h1 className='appartment__title'>{currentappartment.title}</h1>
          <p className='appartment__location'>{currentappartment.location}</p>
        </div>  
          <div className='host'>
            <span className='host__name'>{currentappartment.host.name}</span>
            <img className='host__pix' src={currentappartment.host.picture}></img>  
          </div>
      </div>          
      <div className='tags__container'>
        {currentappartment.tags.map((tag, index) => (
        <Tag key={index} description={tag} className='appartment__tag' />))}
      </div>
      <div className='collapse__content'>
        <Collapse className='collapse' collapsename="Description">
          <span className='collapse__text'>{currentappartment.description}</span> 
        </Collapse>
        <Collapse className='collapse' collapsename="Equipements">
          <span className='collapse__text'>{currentappartment.equipments}</span> 
        </Collapse>
        </div>
    </div>
  );
}

export default Appartment;