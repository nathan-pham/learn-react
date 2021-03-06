import Recipe from "./Recipe"
import "../styles/Menu.css"

const Menu = ({ recipes }) => (
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            { recipes.map((recipe, i) => <Recipe key={ i } { ...recipe } />) }
        </div>
    </article>
)

export default Menu