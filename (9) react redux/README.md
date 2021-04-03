# React Redux
combine UI with Redux store  

## Explicitly Passing the Store 
the most logical & simple way is to pass the store down the component tree  
works well for small apps  
```js
import React from "react"
import { render } from "react-dom"
import App from "./App"
import storeFactory from "./store"

const store = storeFactory()

const render = () => render(
    <App store={ store } />,
    document.getElementById("react-app")
)

store.subscribe(render)
render()
```
