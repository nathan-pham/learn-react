import Rating from "./Rating"
import "./style.css"

const Color = ({ id, title, color, rating=0, removeColor, rateColor }) => (
    <section className="color">
        <header className="color-header">
            <div>
                <div className="color-preview" style={{ backgroundColor: color }}></div>
                <h1>{ title }</h1>
            </div>
            <button onClick={ () => removeColor(id) }>remove</button>  
        </header>
        <div>
            <Rating id={ id } selected={ rating } rateColor={ rateColor } />
        </div>
    </section>
)

export default Color