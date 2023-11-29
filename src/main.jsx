import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Appartments from './pages/Appartments/Appartments.jsx'
import Error from "./pages/Error/Error.jsx"
import About from "./pages/About/About.jsx"
import Layout from './components/Layout.jsx'

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/Appartments/:appartmentid" element={<Appartments />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>  
    </Router>
  </React.StrictMode>
)
