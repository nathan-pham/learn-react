import Post from "./Post"

const PostList = ({ posts }) => (
    posts.map((p, i) => <Post key={ i } { ...p }/>)
)

export default PostList