# React with JSX
pure React with `React.createElement` and factories is verbose; the alternative is JSX  
JSX: JS extension that allows us to write HTML-like syntax  

## React Elements as JSX
looks extremely like ordinary HTML  
```js
const list = (
    <ul>
        <li>1 lb Salmon</li>
        <li>1 cup Pine Nuts</li>
        ...
    </ul>
)
```

## JSX Tips
rules are similar to HTML  
self closing tags  

### Nested Components
you can have need child compnents  
```js
<IngredientsList>
    <Ingredient />
    <Ingredient />
    <Ingredient />
</IngredientsList>
```

### className
`class` is a reserved word so `className` is used instead to apply a `class` attribute  
```js
<h1 className="fancy">Baked Salmon</h1>
```

### JS Expressions & Evaluation
JS expressions are wrapped in curly braces  
```js
<h1>{ props.title + "!" }</h1>
<input type="checkbox" checked={ false } />
```

### Mapping Arrays to JSX
```js
<ul>
    { props.ingredients.map((ingredient, key) => (
        <li key={key}>ingredient</li>
    )) }
</ul>
```

## Babel
JSX is not standard JS & must be converted into `createElement` or factories  
Babel compiles latest JS features (ES6) so obselete browsers can interpret it  
linking the `babel-core` with a CDN will transpile & run any code with a `text/babel` type  
* not ideal for production  
* easy to start 

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
```

## Recipes as JSX
remember to use `key` in mapped child components  

## Babel Presets
Babel 6 introduced presets that allow you to define which transformations should be applied  
generally use `babel-preset-es2015`, `babel-preset-es2016`, `babel-preset-env`, or `babel-preset-react`  

## Intro to Webpack
