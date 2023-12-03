import '../style/Collapse.scss'
import arrow from '../assets/arrow.png'



function Collapse({ collapsename }) {
    return (
        <button className = "collapse" id="collapse">
        {collapsename} <img className='collapse__arrow'src={arrow}></img> 
        </button>
    )
}

export default Collapse