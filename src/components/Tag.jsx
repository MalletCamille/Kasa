import '../style/Tag.scss'
import PropTypes from 'prop-types';

Tag.propTypes = {
    description: PropTypes.string
  };

function Tag({description}) {
    return (    
        <div className='tag'>
            <span className='tag__description'>{description}</span>
        </div>        
    )
}

 export default Tag;