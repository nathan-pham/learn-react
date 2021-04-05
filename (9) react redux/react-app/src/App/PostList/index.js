import store, { actions } from "../../store"
import Post from "./Post"


const PostList = ({ posts }) => {
    const like = (id) => store.dispatch(actions.likePost(id))
    return [...posts].reverse().map((p, i) => <Post key={ i } { ...p } onClick={ () => like(p.id) } />)
}

export default PostList