import "./style.css"

const Route = ({ name }) => (
    <div className="route">
        <h1>{ name || "Home" }</h1>
    </div>
)

export default Route