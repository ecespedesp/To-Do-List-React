import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState("")

  useEffect(() => {
    document.title ="To Do list"
  }, [])

  const addTask = () => {
    if(newTask.trim() === "") return 

    const task = {
      id: Date.now(),
      text: newTask, 
      }

    setTasks(prev => [...prev,task])
    setNewTask("")
      
  }

  return (
    <div className='text-center'>
      <h1 className='text-[38px] '>Listador de tareas</h1>
      <div className='flex justify-center my-5 gap-[15px]'>
        <input className='px-2 py-1 bg-[white] rounded-lg text-[black] font-semibold' 
          type='text'
          placeholder='Ingrese una tarea'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        ></input>
        <button onClick={addTask}>Agregar</button>

        
      </div>
      <div>
          <ul >
            {tasks.map(task => (
              <li key={task.id}>{task.text}</li>
              
            ))}
          </ul>
          
        </div>
    </div>
  )
}

export default App
