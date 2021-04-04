import { createStore, combineReducers } from "redux"
import { posts, theme } from "./reducers"
import * as actions from "./actions"

const store = createStore(
    combineReducers({ posts, theme }), 
    localStorage.getItem("redux-store")
        ? JSON.parse(localStorage.getItem("redux-store"))
        : { posts: [], theme: "dark-theme" }
)

store.subscribe(() => {
    localStorage.setItem("redux-store", JSON.stringify(store.getState()))
})

export default store
export { actions }