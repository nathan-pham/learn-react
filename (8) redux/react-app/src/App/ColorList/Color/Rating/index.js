import Star from "./Star"
import "./style.css"

const Rating = ({ id, selected, total=5, rateColor }) => (
  <div className="star-wrapper">
    {[...Array(total)].map((_, i) => (
      <Star key={ i } selected={ i < selected } rateColor={ () => rateColor(id, i + 1) } />
    ))}
  </div>
)

export default Rating