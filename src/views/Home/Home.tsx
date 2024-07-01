import { Banner, CardsGallery, Footer, NavBar } from "../../components"
import './Home.css'



const Home = () => {

  return (
    <>
      <Banner />
      <div className="nav-home">
        <NavBar />
      </div>
      <CardsGallery />
      <Footer />
    </>
  )
}

export default Home


