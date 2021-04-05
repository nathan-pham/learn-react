import C from "./constants"

const post = (state={}, action) => {
    switch(action.type) {
        case C.ADD_POST:
            return Object.assign({}, action, { type: null })
        case C.LIKE_POST:
            return state.id == action.id
                ? { ...state, like: !state.like }
                : state
        default:
            return state
    }
}

const posts = (state=[], action) => {
    switch(action.type) {
        case C.ADD_POST:
            return [
                ...state,
                post({}, action)
            ]
        case C.REMOVE_POST:
            return state.filter(p => p.id !== action.id)
        case C.LIKE_POST:
            return state.map(p => post(p, action))
        default:
            return state
    }
}

const theme = (state="dark-theme", action) => (
    action.type == C.SET_THEME
        ? action.theme
        : state
)

export {
    posts,
    theme
}