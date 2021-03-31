# Redux
a surprisingly small library (about 100 lines) managing data flow  
flux-like:
- removes dispatchers, represent state with an immutable object  
- reducers: pure functions that return a new state `(state, action) => newState`  

## State
single source of truth: store state in one object  

## Actions
application state should be immutable  
actions: instructions about how application state should change  
- only method to update state  
- history of changes  
- define actions in a file of constants 

```js
const constants = {
    REMOVE_COLOR: "REMOVE_COLOR",
    SORT_COLORS: "SORT_COLORS",
    RATE_COLOR: "RATE_COLOR",
    ADD_COLOR: "ADD_COLOR"
}

export default constants
```

