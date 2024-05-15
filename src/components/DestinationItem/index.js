const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <div className="search-app-container">
      <h1 className="head">{name}</h1>
      <img src={imgUrl} className="place-img" alt={name} />
    </div>
  )
}
export default DestinationSearch
