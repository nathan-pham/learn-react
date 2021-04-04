import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import React from "react"
import store from "./store"
import App from "./App"

const root = document.getElementById("root")

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
root)