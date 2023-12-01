import Banner from '../../components/Banner.jsx'
import {Fragment} from 'react'
import json from '../../../data/appartments.json'
import Card from '../../components/Card.jsx'

function Home() {
  return (
    <Fragment>   
      <div className='banner__container'>
        <Banner/>
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