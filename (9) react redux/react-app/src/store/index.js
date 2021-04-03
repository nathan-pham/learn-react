import { createStore, combineReducers } from "redux"
import { posts, theme } from "./reducers"

const initialState = {
    posts: [],
    theme: "dark-theme"
}

const store = createStore(combineReducers(posts, theme), initialState)

export default store