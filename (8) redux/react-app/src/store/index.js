import { createStore, combineReducers } from "redux"
import { colors, sort } from "./reducers"
import * as actions from "./actions"

const initialState = {
    colors: [],
    sort: "SORTED_BY_TITLE"
}

const store = createStore(
    combineReducers({ colors, sort }),
    localStorage.getItem("redux-store")
        ? JSON.parse(localStorage.getItem("redux-store"))
        : initialState
)

store.subscribe(() => {
    localStorage.setItem("redux-store", JSON.stringify(store.getState()))
})

export default store
export { actions }