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
      done: false 
      }

    setTasks(prev => [...prev,task])
    setNewTask("")
  }

  const toggleTask = (id) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? {...task, done: !task.done} : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (

    <div className='text-center'>
      <h1 className='text-[38px] '>
        Listador de tareas
      </h1>
      <div className='flex justify-center my-5 gap-[15px]'>
        <input className='px-2 py-1 bg-[white] rounded-lg text-[black] font-semibold' 
          type='text'
          placeholder='Ingrese una tarea'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        ></input>
        <button onClick={addTask}>Agregar</button>
      </div>
      
      {/* Div for control of render list, checkbox and deleteTask*/}
      <div className=' max-w-[200px] mx-auto rounded '>
        <ul>
          {tasks.map(task => (
            <li 
            className=' flex my-[10px] ' 
            key={task.id}
            >
              <input
                className='mx-[15px]' 
                type='checkbox' 
                checked={task.done} 
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.done ? "line-through" : ""} >
                {task.text}
              </span>

              <button 
                className='ml-[20px]'
                onClick={()=> deleteTask(task.id)}
              >Eliminar</button>

            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
