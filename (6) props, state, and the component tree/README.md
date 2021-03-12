# Props, State, and the Component Tree
data management techniques that reduce time spent on debugging  

## Property Validation
JS is loosely typed  
React no longer has property validation; import from `prop-types`
| types    | validator        |
|----------|------------------|
| array    | PropTypes.array  |
| bool     | PropTypes.bool   |
| function | PropTypes.func   |
| number   | PropTypes.number |
| object   | PropTypes.object |
| string   | PropTypes.string |

## ES6 Classes and Stateless Functional Components
using ES6 classes
```js
import { Component } from "react"
import PropTypes as types from "prop-types"

class Summary extends Component {
    static propTypes = {
        ingredients: types.number,
        steps: types.number,
        title: (props, name) => (
            typeof props[name] !== "string"
                ? new Error("title must be a string")
                : props[name].length > 20
                    ? new Error("title is too long")
                    : null
        )
    }

    static defaultProps = {
        ingredients: 0,
        steps: 0,
        title: "[recipe]"
    }

    render() {
        const { ingredients, steps, title } = this.props
        return  (
            <div className="summary">
                <h1>{ title }</h1>
                <p>
                    <span>{ ingredients.length } Ingredients | </span>
                    <span>{ steps.length } Steps</span>
                </p>
            </div>
        )
    }
}
```
using functional components
```js
const Summary = ({ ingredients=0, steps=0, title="[recipe]" }) => (
    <div>
        <h1>{ title }</h1>
        <p>{ ingredients } Ingredients | { steps } Steps</p>
    </div>
)

Summary.propTypes = {
    ingredients: types.number.isRequired,
    steps: types.number.isRequired
}
```

## Refs
allows components to interact with children  
* commonly used to interact with UI elements  
* form elements/user input

renders a form & prevents it from being submitted  
```js
import { Component } from "react"

class ColorForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="color title" required />
                <input type="color" required />
                <button>ADD</button>
            </form>
        )
    }
}
```
gather user input with refs
```js
import { Component } from "react"

class ColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {
        e.preventDefault()
        const { title, color } = this.refs
        console.log(`new color: ${ title.value } ${ color.value }`)
        title.value = ''
        color.value = "#000"
        title.focus()
    }
    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <input ref="title" type="text" placeholder="color title" required />
                <input ref="color" type="color" required />
                <button>ADD</button>
            </form>
        )
    }
}
```

## Inverse Data Flow
two way data binding  
send callback to a component as a property to pass back data as arguments  
inverse: send function as a prop and component sends data as arguments  
```js
const logColor = (title, color) => console.log(`new color: ${ title.value } ${ color.value }`)

<ColorForm onNewColor={ logColor } />

...
    submit(e) {
        const { title, color } = this.refs
        this.props.onNewColor(title.value, color.value)
        title.value = ''
        color.value = "#000"
        title.focus()
    }
...
```

### Optional Function Properties
you can check the existence of a function or set a default property
```js
if (this.props.onNewColor) {
    this.props.onNewColor(title.value, color.value)
}

// recommended
class ColorForm extends Component {
    static propTypes = {
        onNewColor: types.func
    }

    static defaultProps = {
        onNewColor: (f) => f
    }
}
```

## Refs in Stateless Functional Components
capture ref instances in local instances  
```js
const ColorForm = ({ onNewColor=(f)=> f }) => {
    let title, color

    const submit = (e) => {
        e.preventDefault()
        onNewColor(title.value, color.value)
        title.value = ''
        color.value = "#000"
        title.focus()
    }

    return (
        <form onSubmit={ submit }>
            <input ref={ (i) => title = i } type="text" placeholder="color title" required />
            <input ref={ (i) => color = i } type="color" required />
            <button>ADD</button>
        </form>
    )
}
```

## React State Management
properties are immutable  
changing & rerendering UI is a reflection of state  

## Introducing Component State
state is changing data  
statless components cannot rerender (unless you use hooks)  
```js
const Star = ({ selected=false, onClick=(f) => f }) => {
    <div className={ selected ? "star selected" : "star" } onClick={ onClick }></div>
}

Star.propTypes = {
    selected: types.bool,
    onClick: types.func
}
```

### The Star in CSS
using clip path you can clip an area out of the div  
points -> polygon  
```css
.star {
    cursor: pointer;
    height: 25px;
    width: 25px;
    margin: 2px;
    float: left;
    background-color: grey;
    clip-path: polygon(
        50% 0%,
        63% 38%,
        100% 38%,
        69% 59%,
        82% 100%,
        50% 75%,
        18% 100%,
        31% 59%,
        0% 38%,
        37% 38%
    );
}

.star.selected {
    background-color: red;
}
```