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
        <>
            <div className="post-form">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGPVc6OH9Z25A/profile-displayphoto-shrink_200_200/0/1602999352112?e=1623283200&v=beta&t=PfcaM5JLCjL-4Uw8ZGMfTa2mZdE7K0guQreozriiOaQ" alt="profile picture" />
                <form onSubmit={ submit } autoComplete="off">
                    <input placeholder="What's happening?" id="post-input" name="post-input" />
                    <button>Tweet</button>
                </form>
            </div>
            
            <div className="divider"></div>
        </>
    )
}

export default PostForm