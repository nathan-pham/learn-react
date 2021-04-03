import "./style.css"

const Star = ({ selected, rateColor }) => (
    <div className={ selected ? "star selected" : "star" } onClick={ rateColor }></div>
)

export default Star