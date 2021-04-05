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
generally use `@babel/preset-env`, or `@babel/preset-react`  

## Intro to Webpack
Webpack: module bundler that manages JSX, ES6 tranformations, dependencies, images and CSS  
* "builds" everything into one file
* speed: reduces latency & handles minification
* also manages feature flagging, hot module replacement (HMR), code splitting (split code into "rollups" that load on different pages/devices)
* composing: create reusable React components that can integrate easily with other applications
* consistency: use bleeding-edge JS today

### Webpack Loaders
loader: handles transformations, added to `webpack.config.js`  
* `babel-loader` transpiles React & ES6  
* `css-loader` includes CSS into bundles  

## Recipes App with a Webpack Build
using webpack alleviates performance issues with just including a CDN  

### Installing Webpack Dependencies
`npm install webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`  
`npm install react react-dom --save`  

### Webpack Configuration
tell Webpack how to bundle file in `webpack.config.js`  
example Webpack build:
1. JSX -> pure React elements
2. transpile ES6 -> ES5
3. export to one file -> bundle.js

```js
// webpack.config.js
const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: path.join(__dirname, "./src/index.js")
    },
    output: {
       path: path.join(__dirname, "./dist"),
       filename: "[name].bundle.js" 
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: [ "babel-loader" ],
            // query: {
            //     presets: [ "env", "react" ]
            // }
        }]
    },
    resolve: {
        extensions: ['*', ".js", ".jsx"]
    }
}
```

### Configure Babel
add presets in `babel.config.json`
```js
// babel.config.json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

### Loading the Bundle
scripts are exported to the `dist` folder  
you should place an `index.html` file here where the React components should be mounted
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React Recipes App</title>
</head>
<body>
    <div id="root"></div>
    <script src="main.bundle.js"></script>
</body>
</html>
```

### Source Mapping
bundling code makes it hard to debug apps  
source map: maps bundle to original files  
not intended for production  
```js
// webpack.config.js
module.exports = {
    ...
    devtool: "eval-source-map"
}
```

### Optimizing the Bundle
bundles are basically text, you can reduce file size & load it faster with minification  
```js
// webpack.config.js
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    ...
    optimization: {
        minimize: true,
        minimizer: [ 
            new TerserPlugin({
                extractComments: false
            }) 
        ]
    }
}
```

## Bundling CSS
can be included with `import` statements  
`npm install style-loader css-loader postcss-loader postcss-preset-env --save-dev`
```js
// webpack.config.js
module.exports = {
    ...
    module: {
        rules: [
            ...
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [ "postcss-preset-env" ]
                        }
                    }
                }]
            }
        ]
    }
}
```

## create-react-app
CLI used to generate a React project  
`npm install -g create-react-app`  
`create-react-app .`  
installs React, ReactDOM, and react-scripts
* react-scripts: autoinstalls Webpack, Babel, ESLint, etc.  
* src/App.js is where you import & edit components
* run `npm start` to initialize a live preview
* run `npm build` to make production-ready bundles