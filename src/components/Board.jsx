import './Board.css'
const Board = ({task, index, taskList, setTaskList}) => {
    const handleDelete = () => {
        taskList.splice(index, 1)
        setTaskList((taskList) => [...taskList])
    }
    return (
        <>
            <div>
                <span>{task}</span>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}
export default Board