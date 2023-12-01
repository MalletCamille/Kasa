import '../style/Card.scss'
import PropTypes from 'prop-types';


Card.propTypes = {
    title: PropTypes.string.isRequired
}

function Card({ title }) {
    return (
        <article className = "card">
            <h2 className='card__title'>{title}</h2>
        </article>
    )
}

export default Card