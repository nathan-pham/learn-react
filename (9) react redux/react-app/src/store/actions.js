import C from "./constants"
import { v4 } from "uuid"

const removePost = (id) => ({
    type: C.REMOVE_POST,
    id
})

const likePost = (id) => ({
    type: C.LIKE_POST,
    id
})

const addPost = (title) => ({
    type: C.ADD_POST,
    like: false,
    id: v4(),
    title
})

const setTheme = (theme) => ({
    type: C.SET_THEME,
    theme: `${ theme }-theme`
})

export {
    removePost,
    likePost,
    addPost
}