import '../style/Collapse.scss'
import arrow from '../assets/arrow.png'
import React, { Fragment, useState } from 'react';

function Collapse({ collapsename, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleClickArrow() {
    setIsCollapsed(!isCollapsed);
  }

  return (
   <Fragment>
      <button className="collapse__button" onClick={handleClickArrow}>
        {collapsename} <img className={`collapse__arrow ${isCollapsed ? '--collapsed' : '--expanded'}`} src={arrow} alt="arrow" />
      </button>

      {isCollapsed ? null : (
        <div className="collapse__details">
          {children}
        </div>
      )}
    </Fragment>
  );
}

export default Collapse;