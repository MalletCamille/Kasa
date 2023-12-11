import '../style/Tag.scss'
import PropTypes from 'prop-types';

Tag.propTypes = {
    description: PropTypes.string
  };

function Tag({description}) {
    return (    
            <span className='tag__description'>{description}</span>
    )
}

 export default Tag;