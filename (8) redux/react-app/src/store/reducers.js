import C from "./constants"

const filter = (action, allowed=[]) => {
    let result = {}
    for(const key of allowed) {
        if(action.hasOwnProperty(key)) {
            result[key] = action[key]
        }
    }
    return result
}

const color = (state={}, action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return {
                ...action,
                type: null,
                rating: 0
            }
        case C.RATE_COLOR:
            return state.id !== action.id
                ? state
                : { ...state, rating: action.rating }
        default:
            return state
    }
}

const colors = (state=[], action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ]
        case C.RATE_COLOR:
            return state.map(c => color(c, action))
        case C.REMOVE_COLOR:
            return state.filter(c => c.id !== action.id)
        default:
            return state
    }
}

const sort = (state="SORTED_BY_DATE", action) => {
    return action.type == C.SORT_COLORS
        ? action.sortBy
        : state
}


export {
    sort,
    color,
    colors
}