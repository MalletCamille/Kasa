import { useParams } from 'react-router-dom';
import Slideshow from '../../components/Slideshow';
import PropTypes from 'prop-types'
import json from '../../../data/appartments.json'

Appartment.propTypes = {
  cover: PropTypes.string.isRequired
 }


function Appartment() {
  const { appartmentid } = useParams();
  const currentappartment = json.find(appartment => appartment.id === appartmentid);

  return (
    <div>
      <Slideshow cover={currentappartment.cover}>
      </Slideshow>
      <h1>Bel appartement meublé</h1>
      <p>ID de l'appartement : {appartmentid}</p>
    </div>
  );
}

export default Appartment;