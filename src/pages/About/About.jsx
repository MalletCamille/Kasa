import Banner from '../../components/Banner.jsx'
import imgbannerabout from '../../assets/Banner_About.png'

function About() {
    return (
      <div className="banner__about">
           <Banner Tagline={false} image={imgbannerabout} />
      </div>


  )
}

export default About