import Banner from '../../components/Banner.jsx'
import {Fragment} from 'react'
import json from '../../../data/appartments.json'
import Card from '../../components/Card.jsx'
import imgbannerhome from '../../assets/Banner_Home.png'

function Home() {
  return (
    <Fragment>   
      <div className='banner__container'>
        <Banner Tagline={true} image={imgbannerhome} />
      </div>
    <main className='main'>
    {json.map(appartments=> (
    <Card key={`${appartments.id}`} title={appartments.title}>
    </Card>    
      ))}
    </main>  
   </Fragment>  
  );
}

export default Home;