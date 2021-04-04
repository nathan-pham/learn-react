import store, { actions } from "../../store"
import "./style.css"

const PostForm = () => {
    const submit = (e) => {
        e.preventDefault()

        const input = e.target.querySelector("input[name='post-input']")
        store.dispatch(actions.addPost(input.value))

        input.value = ''
    }

    return (
        <form onSubmit={ submit } className="submit-form">
            <input placeholder="What's happening?" id="post-input" name="post-input" />
            <button>Tweet</button>
        </form>
    )
}

export default PostForm