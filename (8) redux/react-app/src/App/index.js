import { useSelector } from "react-redux"
import ColorList from "./ColorList"
import ColorForm from "./ColorForm"
import "./style.css"

const selectColors = (state) => state.colors

const App = () => {
    const colors = useSelector(selectColors)

    return (
        <>
            <ColorForm />
            <ColorList colors={ colors } />
        </>
    )
}

export default App