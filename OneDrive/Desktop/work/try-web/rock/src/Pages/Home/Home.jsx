import React from 'react'
import Banner from '../../Components/Banner/Banner'
import History from '../../Components/History/History'
import About from '../About/About'
import Service from '../../Components/Service/Service'
import Contact from '../Contact/Contact'
import Footer from '../../Components/Footer/Footer'
// import Navabr from '../../Components/Navbar/Navabr'


const Home = () => {
  return (
    <>
    {/* <Navabr/> */}
    <Banner/>
    <About/>
    <Service/>
    <History/>
    <Contact/>
    <Footer/>
    
    
    </>
  )
}

export default Home