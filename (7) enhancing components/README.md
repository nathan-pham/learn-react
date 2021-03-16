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

## React.Children
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