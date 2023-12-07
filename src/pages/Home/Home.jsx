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
        <Banner tagline='Chez vous, partout ailleurs' image={imgbannerhome} />
      </div>
      <main className='main'>
        {json.map(appartments => (
          <Link to={`/Appartment/${appartments.id}`} key={appartments.id} cover={appartments.cover}>
            <Card title={appartments.title}cover={appartments.cover}>
            </Card>
          </Link>
        ))}
      </main>
    </Fragment>
  );
}

export default Home;