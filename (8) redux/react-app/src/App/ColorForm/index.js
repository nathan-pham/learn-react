import store, { actions } from "../../store"

const ColorForm = () => {
    const submit = (e) => {
        e.preventDefault()
        const [title, color] = [...e.target.querySelectorAll("input")]

        store.dispatch(actions.addColor(title.value, color.value))

        title.value = ''
        color.value = "#000000"
        title.focus()
    }

    return (
        <form onSubmit={ submit } className="color-form">
            <input type="text" placeholder="color title" required />
            <input type="color" required />
            <button>add</button>
        </form>
    )
}

export default ColorForm