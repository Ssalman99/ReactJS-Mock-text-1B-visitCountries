import './App.css'

const VisitedCountries = props => {
  const {visited, removeClicked} = props
  const {imageUrl, name, id} = visited
  const removed = () => {
    removeClicked(id)
  }
  return (
    <li className="coutries-item-container">
      <img src={imageUrl} alt="thumbnail" className="img" />
      <div className="img-button-container">
        <p className="pera">{name}</p>
        <button className="remove-button" type="button" onClick={removed}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
