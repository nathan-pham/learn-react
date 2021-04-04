import { useSelector } from "react-redux"
import PostForm from "./PostForm"
import PostList from "./PostList"
import "./style.css"

const selectPosts = state => state.posts

const App = () => {
    const posts = useSelector(selectPosts)

    return (
        <div className="app-wrapper">
            <PostForm />
            <PostList posts={ posts } />
        </div>
    )
}

export default App