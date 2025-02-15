import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Board from './components/Board'
function App() {
  const [taskList, setTaskList] = useState([])
  console.log(taskList)
  return (
    <>
      <h1>To-Do-Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
      <div>
        {
          taskList.map((task, index) => (
            <Board
            task={task}
            index={index}
            key={index}
            taskList={taskList}
            setTaskList={setTaskList}/>
          ))
        }
      </div>
    </>
  )
}

export default App
