// Write your code here.
import './index.css'

const CardList = props => {
  const {bannerList} = props
  const {headerText, description, className} = bannerList

  return (
    <li className={`${className} banner-card-list`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export default CardList
