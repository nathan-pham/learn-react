import C from "./constants"
import { v4 } from "uuid"

const removeColor = id => ({
    type: C.REMOVE_COLOR,
    id
})

const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    rating,
    id
})

const sortColors = sortedBy => sortedBy === "rating"
    ? ({ type: C.SORT_COLORS, sortBy: "SORTED_BY_RATING" })
    : sortedBy === "title"
        ? ({ type: C.SORT_COLORS, sortBy: "SORTED_BY_TITLE" })
        : ({ type: C.SORT_COLORS, sortBy: "SORTED_BY_DATE" })
    
const addColor = (title, color) => ({
    type: C.ADD_COLOR,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString()
})

export {
    addColor,
    rateColor,
    sortColors,
    removeColor
}