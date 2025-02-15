import { useState } from "react"
const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState("")
    const clickHandle = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")
    }
    return(
        <>
            <form>
                <input
                type="text"
                value={input}
                placeholder="Add a task"
                onChange={(e) => setInput(e.target.value)} />
                <button onClick={clickHandle}>Add</button>
            </form>
        </>
    )
}
export default Input