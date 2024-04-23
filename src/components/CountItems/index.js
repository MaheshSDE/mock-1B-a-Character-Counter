import './index.css'

const CountItems = props => {
  const {countDetails} = props
  const {characterLength} = countDetails

  return (
    <li className="list-items">
      <p>{characterLength}</p>
    </li>
  )
}
export default CountItems
