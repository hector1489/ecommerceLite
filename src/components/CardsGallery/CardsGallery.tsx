import { useContext } from "react"
import { AppContext } from "../../context/GlobalState"
import IRecord from "../../interfaces/IRecord"
import './CardsGallery.css'

const CardsGallery = () => {

  const contextValue = useContext(AppContext)

  if (!contextValue) {
    return null
  }

  const { state } = contextValue;
  const galleryData: Array<IRecord> = state.IsHero

  return (

    <div className="cardsGallery">

      {galleryData.map((item, index) =>(
        <div key={index} className="card card-compact bg-neutral text-neutral-content w-96 shadow-xl">
        <figure>
          <img
            src={item.urlImage}
            alt={item.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      </div>
      ))}

    </div>
  )
}


export default CardsGallery

