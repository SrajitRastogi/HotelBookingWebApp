import Featured from "../../Components/featured/Featured"
import FeaturedProperty from "../../Components/featuredProperty/FeaturedProperty"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/header/Header"
import MailList from "../../Components/mailList/MailList"
import Navbar from "../../Components/navbar/Navbar"
import { PropertyList } from "../../Components/propertyList/PropertyList"
import "./home.css"

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by Property Type</h1>
          <PropertyList/>

          <h1 className="homeTitle">Home guest home</h1>
          <FeaturedProperty/>
          <MailList/>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Home