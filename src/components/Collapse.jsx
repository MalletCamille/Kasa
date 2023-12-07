// Collapse.jsx
import { useState } from 'react';
import '../style/Collapse.scss';
import arrow from '../assets/arrow.png';
import PropTypes from 'prop-types';

Collapse.propTypes = {
  collapsename: PropTypes.string,
  children: PropTypes.node
}

function Collapse({ collapsename, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClickArrow = () => {
    setIsCollapsed(!isCollapsed);
  };

  const detailsClass = `collapse__details ${isCollapsed ? '--collapsed' : '--expanded'}`;

  return (
    <div className='collapse'>
      <button className="collapse__button" onClick={handleClickArrow}>
        {collapsename} <img className={`collapse__arrow ${isCollapsed ? '--collapsed' : '--expanded'}`} src={arrow} alt="arrow" />
      </button>

      <div className={detailsClass}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;