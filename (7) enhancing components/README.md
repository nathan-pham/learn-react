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

### Class Constructors
component initialization  
technically not a lifecycle method  
