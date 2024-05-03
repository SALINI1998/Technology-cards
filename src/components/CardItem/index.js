// Write your code here.
import './index.css'

const CardItem = props => {
    const {cardDetails} = props
    const {title, description, imgUrl, ClassName} = cardDetails

    return (
       <li ClassName={`${ClassName} card-item`}>
       <h1 ClassName="card- title">{title}</h1>
       <p ClassName="card-description">{description}</p>
       <div ClassName="img-container">
         <img ClassName="crad-img src={imgUrl} alt={title} />
       </div>
    </li>
  )
}

export default CardItem
