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

## Action Payload Data
payload: information provided for a new record  
example `RATE_COLOR` action  
```js
{
    type: "RATE_COLOR",
    id: "551f9edd-537b-42c9-8ccb-ad222f6076f2",
    rating: 4
}
```
example `ADD_COLOR` action  
```js
{
    type: "ADD_COLOR",
    color: "#fff",
    title: "white",
    rating: 0,
    id: "7aedee69-b52d-4fa3-90e8-d96edb02d11e",
    timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
}
```

## Reducers
reducers: modular functions that update parts of the state tree  
take current state & payload to return a new state  
```js
{
    colors: [
        {
            "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
            "title": "Ocean Blue",
            "color": "#0070ff",
            "rating": 3,
            "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
        }
        ...
    ],
    sort: "SORTED_BY_DATE"
}
```
main branches: `colors` and `sort`  
example reducers  
```js
import C from "./constants"

export const color = (state={}, action) => {
    switch(action.type) {
        case C.ADD_COLOR: 
            return ({
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            })
        case C.RATE_COLOR:
            return state.id !== action.id
                ? state
                : ({
                    ...state,
                    rating: action.rating
                })
        default:
            return state
    }
}

export const colors = (state=[], action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return ([
                ...state,
                color({}, action)
            ])
        case C.RATE_COLOR:
            return state.map(c => color(c, action))
        case C.REMOVE_COLOR:
            return state.filter(c => c.id !== action.id)
        default:
            return state
    }
}

export const sort = (state="SORTED_BY_DATE", action) => {
    return (action.type) {
        case C.SORT_COLORS:
            return action.sortBy
        default:
            return state
    }
}
```
reducers should be predictable; don't generate or fetch data from a reducer  
avoid mutating state & avoid side effects  