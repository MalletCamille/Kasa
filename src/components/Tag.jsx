import '../style/Tag.scss'
import PropTypes from 'prop-types';

Tag.propTypes = {
    description: PropTypes.string.isRequired,
  };

function Tag({description}) {
    return (    
        <div className='tag'>
            <span className='tag__description'>{description}</span>
        </div>        
    )
}

 export default Tag;