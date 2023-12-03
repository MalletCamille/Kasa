import Banner from '../../components/Banner.jsx'
import imgbannerabout from '../../assets/Banner_About.png'
import Collapse from '../../components/Collapse.jsx'
import { Fragment } from 'react'

function About() {
    return (
      <Fragment>
        <div className="banner__about">
           <Banner Tagline={false} image={imgbannerabout} />
        </div>
        <div className='collapse__container'>
          <Collapse collapsename="Fiabilité" />
          <Collapse collapsename="Respect" />
          <Collapse collapsename="Service" />
          <Collapse collapsename="Sécurité" />
        </div>
     </Fragment> 
  )
}

export default About