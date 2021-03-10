const Ingredient = ({ amount, measurement, name }) => (
    <li>
        <span>{ amount }</span>
        <span>{ measurement }</span>
        <span>{ name }</span>
    </li>
)

export default Ingredient