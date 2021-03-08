# Pure React
knowing how React works behind the scenes will help you understand how React runs in the browser  

## Page Setup
React: library for creating views  
ReactDOM: render UI to the browser  
the packages are split to exted rendering to other platforms  

## CDN
web safe versions of React & ReactDOM can be found on the [react page](https://reactjs.org/docs/cdn-links.html)  
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pure React</title>
</head>
<body>
    <div id="root">
        <!-- container necessary to render React components -->
    </div>
    
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script>
        // pure React
    </script>
</body>
</html>
```

## The Virtual DOM
HTML is interpreted to create a document object model (DOM) that looks like a tree  
AJAX -> single page application, or SPA  
* web applications run out of a single page, JS updates interface
* initially loads one HTML document, JS destroys and creates new user interfaces  

DOM API: collection of objects used to ineract with the DOM
* `document.createElement` or `document.appendChild` are example components of the DOM API  
* updating elements is easy but inserting new elements are slow

React manages DOM changes to create performant SPAs
* interact with the virtual DOM, which React interprets to construct the UI
* made of React elements represented by JS objects
* supposdely faster to interact with JS objects & let React manage the DOM API

## React Elements
React elements are a description of what a DOM element should look like  
```js
// normal DOM API
const h1 = document.createElement("h1")
h1.textContent = "Baked Salmon"

// pure React
React.createElement("h1", null, "Baked Salmon")

// <h1>Baked Salmon</h1>
```
`React.createElement` accepts three arguments; the node type, element properties, and children  
```js
React.createElement("h1", {
    "id": "recipe",
    "data-type": "title"
}, "Baked Salmon")

// <h1 id="recipe" data-type="title">Baked Salmon</h1>
```

## ReactDOM
contains tools needed to render React elements  
generates HTML  
`ReactDOM.render` accepts two arguments, the React element and target container.  
```js
const app = React.createElement("h1", null, "Baked Salmon")
ReactDOM.render(app, document.createElement("root"))
```

## Children
ReactDOM renders a single element to the DOM, other elements are added through nesting  
`props.children` contains child elements  
* "Baked Salmon" was a child text node  
* creates a tree of elements -> component tree

```js
React.createElement("ul", null,
    React.createElement("li", null, "1 lb Salmon"),
    React.createElement("li", null, "1 cup Pine Nutes")
    React.createElement("li", null, "2 cups Butter Lettuce")
    React.createElement("li", null, "1 Yellow Squash")
    React.createElement("li", null, "1/2 cup Olive Oil")
    React.createElement("li", null, "3 cloves of Garlic")
)

// basic virtual dom result
{
    type: "ul",
    props: {
        children: [
            { type: "li", "props": { children: "1 lb Salmon" } },
            { type: "li", "props": { children: "1 cup Pine Nutes" } },
            { type: "li", "props": { children: "2 cups Butter Lettuce" } },
            { type: "li", "props": { children: "1 Yellow Squash" } },
            { type: "li", "props": { children: "1/2 cup Olive Oil" } },
            { type: "li", "props": { children: "3 cloves of Garlic" } }
        ]
    }
}
```

## Constructing Elements with Data
React allows you to separate data from UI  
* store data in an array and map it into a React element  

```js
const items = [
    "1 lb Salmon",
    "1 cup Pine Nutes",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

React.createElement("ul", null,
    items.map((ingredient, key) => (
        React.createElement("li", { key }, ingredient)
    ))
)
```

## React Components
all interfaces are made of parts, or components  
* reuse the same DOM structure with different data
* very scalable and easy to maintain  

## React.createClass
depreciated method to create components

## React.Component
```js
class IngredientsList extends React.Component {
    createListItem(ingredient, key) {
        return React.createElement("li", { key }, ingredient)
    }
    render() {
        return React.createElement("ul", { className: "ingredients" },
            this.props.items.map(this.createListItem)
        )
    }
}

const items = [
    "1 lb Salmon",
    "1 cup Pine Nutes",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]

ReactDOM.render(
    React.createElement(IngredientsList, { items }, null),
    document.getElementById("root")
)
```

## Stateless Functional Components
functions that return a React element  
should be pure & limit side effects  
```js
const IngredientsList = ({ items }) => (
    React.createElement("ul", { className: "ingredients" },
        items.map((ingredient, key) => (
            React.createElement("li", { key }, ingredient)
        ))
    )
)
```

## DOM Rendering
