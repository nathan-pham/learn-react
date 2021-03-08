# Pure React
knowing how React works behind the scenes will help you understand how React runs in the browser  

## Page Setup
React: library for creating views  
ReactDOM: render UI to the browser  
the packages are split to exted rendering to other platforms  

## CDN
web safe versions of React & ReactDOM can be found on the [react page](https://reactjs.org/docs/cdn-links.html)  
example template: 
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
example properties:
```js
React.createElement("h1", {
    "id": "recipe",
    "data-type": "title"
}, "Baked Salmon")

// <h1 id="recipe" data-type="title">Baked Salmon</h1>
```

## ReactDOM