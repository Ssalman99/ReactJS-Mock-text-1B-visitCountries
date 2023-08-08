import './App.css'

const Countries = props => {
  const {details, buttonClicked} = props
  const {id, name, isVisited} = details

  const buttonClick = () => {
    buttonClicked(id)
  }

  const buttonText = isVisited ? 'Visited' : 'Visit'

  const buttonClass = isVisited ? 'button' : 'highlight-button'

  return (
    <li className="list-item-button">
      <p className="line">{name}</p>
      {isVisited ? (
        <p className={buttonClass}>{buttonText}</p>
      ) : (
        <button type="button" className={buttonClass} onClick={buttonClick}>
          {buttonText}
        </button>
      )}
    </li>
  )
}

export default Countries
