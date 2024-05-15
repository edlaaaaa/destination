const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="search-app-container">
      <h1 className="head">{name}</h1>
      <img src={imgUrl} className="place-img" alt={name} />
    </li>
  )
}
export default DestinationSearch
