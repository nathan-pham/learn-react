# Enhancing Components
component lifecycle: methods when components are mounted or updated  

## Component Lifecyles
methods/events called before and after a UI renders  
* mounting lifecycle   
* updating lifecycle  

### Mounting Lifecycle
occurs when a component is mounted or unmounted  
used to initialize state, make API calls, start/top timers, manipulate the DOM and initalize libraries  
* `constructor(props)`: always runs first  
* `componentDidMount()`: invoked immediately after component is inserted
* `componentDidUnmount()`: invoked immediately before component is removed
* `componentDidUpdate()`: invoked after element updates

[fetching data with componentDidMount](https://codepen.io/nathan-pham/pen/QWGPNQp)  
clean up any listeners or background processes in `componentDidUnmount`.   
[clock app](https://codepen.io/nathan-pham/pen/xxReOdK)

### Class Constructors
component initialization  
technically not a lifecycle method  

### unmountComponentAtNode
forcefully removes all children components and then the root component  
```js
import { Component } from "react"
import { render, unmountComponentAtNode } from "react-dom"
const root = document.getElementById("root")

class App {
    componentDidUnmount() {
        console.log("unmounted")
    }
    render() {
        return <p onClick={ this.props.onClick }>Hello World</p>
    }
}

render(<App onClick={ () => unmountComponentAtNode(target) }/>, target)
```

### Updating Lifecycle
invoked when state changes or new properties from parents  
can cancel unnecessary updates  
initializes every time `setState` is called  
do not call within an update lifecycle; it will cause an infinite recursive loop  
* `shouldComponentUpdate(nextProps, nextState)`: only used to alter default behavior of rerendering; returning false will prevent rendering
* `componentDidUpdate(prevProps, prevState)`: invoked after DOM rerenders

### React.Children
interact with child components  
map, loop, or convert `props.children` to an array  
`React.Children.only` verifies only a single child is displayed  
* multiple children will throw an error  

```js
import { Children } from "react"
import { render } from "react-dom"

const Display = ({ truth=true, children }) => (
    truth
        ? Children.only(children)
        : null
)

const age = 22

render(
    <Display truth={ age >= 18 }>
        <h1>You can enter</h1>
    </Display>,
    document.getElementById("root")
)
```
you can also use `React.Children` to convert elements into an array (which is useful to filter out elements)  
[React.Children example](https://codepen.io/nathan-pham/pen/NWbmdbX)


## JavaScript Library Integration
React is only concerned with creating views  
requires coordination with other JS libraries  

### React with jQuery
don't do it; directly manipulating the DOM leads to side effects

### Making Requests with Fetch
`fetch` allows you to write API calls with promises  
natively supported or polfill with `isomorphic-fetch`  
`npm install isomorphic-fetch --save`  
[fetch countries](https://codepen.io/nathan-pham/pen/NWbmdbX)

### Incorporating a D3 Timeline
Data Drive Documents (D3): JS framework for data visualizations  
`npm install d3 --save`  
[d3 componentDidMount](https://codepen.io/nathan-pham/pen/BaQerzQ)   
[d3 React UI](https://codepen.io/nathan-pham/pen/eYBaMKb)

## Higher-Order Components
higher-order component (HOC): React component that receives another component as an argument  
* wrap component in a class with state management
* reuse functionality  
* wrap components with components  

[fetch people](https://codepen.io/nathan-pham/pen/vYyoGKd)  
[fetch people hoc](https://codepen.io/nathan-pham/pen/PobMNzd)  
[expandable hoc](https://codepen.io/nathan-pham/pen/zYogqWZ)  
[menu hoc](https://codepen.io/nathan-pham/pen/bGBXpKX)

Higher-order components are great for reusing functionality & abstracting component state/lifecycle  
More stateless functional components (only UI)

## Managing State Outside of React
keeping state at the root in large applications makes it difficult to separate data from UI  
outside state management = no class components  
* pure functions
* easier to test & understand 

everything but `setState` (localStorage, global variables, more frameworks)

## Rendering a Clock
pure functions are easy to maintain; you can just swap out the rendering  
[functional clock](https://codepen.io/nathan-pham/pen/gOLVrBE)  

## Flux
alternative state management design pattern  
data flows in one direction, compliments functional approach  
pure functions: stateless components  
stores: manages state data externally  
* update & store data  
* only system that can update a view 

action: user input  
dispatcher: provides instructions & data to make a change  
* queue actions & dispatch actions to a store  
* store will modify & update view upon receiving an action  

data flow: action -> dispatcher -> store -> view

### Views
React stateless component  
Class components are not necessary (unless you need a lifecycle hook)  

### Actions & Action Creators
provide instructions to the store to modify state  
action creators: abstract details to build actions  
* at minimum contain a *type*  

### Dispatcher
only *one* dispatcher  
takes actions and sends it to a store  
Flux is not a framework but it does include a `Dispatcher` class  
```js
import Dispatcher from "flux"
class CountdownDispatcher extends Dispatcher {
    handleAction(action) {
        console.log("dispatching:", action)
        this.dispatch({
            source: "VIEW_ACTION",
            action
        })
    }
}
```

### Stores
objects that contain application logic & state data  
