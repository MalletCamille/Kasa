import Header from './Header.jsx';
import {Fragment} from 'react'
import Footer from './Footer.jsx'

//@import './JajaStyles.scss';



function layout({children}) {
    return (
        <Fragment>
        <Header />
        {children}
        <Footer />
        </Fragment>
    )
}

export default layout