import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props
  const {imgUrl, name} = destinationsDetails
  return (
    <li className="destination-container">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
