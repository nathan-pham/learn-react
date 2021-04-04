import { useSelector } from "react-redux"
import PostForm from "./PostForm"
import PostList from "./PostList"
import Route from "./Route"
import "./style.css"

const selectPosts = state => state.posts

const App = () => {
    const posts = useSelector(selectPosts)
    console.log(posts)
    return (
        <div className="app-wrapper">
            <Route />
            <PostForm />
            <PostList posts={ posts } />
        </div>
    )
}

export default App