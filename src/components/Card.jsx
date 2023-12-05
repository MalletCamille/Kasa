import '../style/Card.scss'
import PropTypes from 'prop-types';


Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover : PropTypes.string.isRequired
}

function Card({ title, cover }) {
    return (
        <article className = "card">
            <h2 className='card__title'>{title}</h2>
            <img className='card__img' src={cover} alt="aperçu de l'appartement"></img>
        </article>
    )
}

export default Card