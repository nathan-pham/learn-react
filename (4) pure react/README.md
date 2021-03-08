# Pure React
Knowing how React works behind the scenes will help you understand how React runs in the browser  

## Page Setup
React: library for creating views  
ReactDOM: render UI to the browser  
The packages are split to exted rendering to other platforms  

## CDN
Web safe versions of React & ReactDOM can be found on the [react page](https://reactjs.org/docs/cdn-links.html)  
Example template: 
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pure React</title>
</head>
<body>
    <div id="root"></div>
    
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script>
        // pure react
    </script>
</body>
</html>
```