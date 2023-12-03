import Banner from '../../components/Banner.jsx'
import {Fragment} from 'react'
import json from '../../../data/appartments.json'
import Card from '../../components/Card.jsx'
import imgbannerhome from '../../assets/Banner_Home.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Fragment>
      <div className='banner__container'>
        <Banner Tagline={true} image={imgbannerhome} />
      </div>
      <main className='main'>
        {json.map(appartments => (
          <Link to={`/Appartment/${appartments.id}`} key={appartments.id}>
            <Card title={appartments.title}>
            </Card>
          </Link>
        ))}
      </main>
    </Fragment>
  );
}

export default Home;