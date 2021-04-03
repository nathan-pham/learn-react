import store, { actions } from "../../store"
import Color from "./Color"
import "./style.css"

const removeColor = (id) => store.dispatch(actions.removeColor(id))
const rateColor = (id, rating) => store.dispatch(actions.rateColor(id, rating))

const ColorList = ({ colors=[] }) => (
    <div className="color-list">
        {colors.length == 0 
            ? <p>Add a color!</p>
            : colors.map((color) => <Color key={ color.id } { ...color } removeColor={ removeColor } rateColor={ rateColor } />)
        }
    </div>
)

export default ColorList