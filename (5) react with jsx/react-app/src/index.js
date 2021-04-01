import React from "react"
import ReactDOM from "react-dom"
import Menu from "./components/Menu"
import data from "./data/recipes"

window.React = React

ReactDOM.render(
    <Menu recipes={ data } />,
    document.getElementById("root")
)