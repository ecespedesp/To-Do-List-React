import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState("")

  const [filter, setFilter] = useState("all")

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

  const filteredTasks = tasks.filter(task => {
    if(filter === "done") return task.done
    if(filter === "pending") return !task.done
    return true
  }
    
  )

  return (
  <div className="min-h-screen bg-neutral-900 text-white px-4 py-6">
    
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Listador de tareas
      </h1>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          className="w-full px-3 py-2 rounded-lg text-white font-semibold bg-neutral-800"
          type="text"
          placeholder="Ingrese una tarea"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />

        <button
          onClick={addTask}
          className='bg-red-600 hover:!bg-red-700 transition rounded-lg px-5 py-2 font-semibold'
        >
          Agregar
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg ${
            filter === "all" ? "!bg-red-600" : "!bg-neutral-700"
          }`}
        >
          Todas
        </button>

        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-lg ${
            filter === "pending" ? "!bg-red-600" : "!bg-neutral-700"
          }`}
        >
          Pendientes
        </button>

        <button
          onClick={() => setFilter("done")}
          className={`px-4 py-2 rounded-lg ${
            filter === "done" ? "!bg-red-600" : "!bg-neutral-700"
          }`}
        >
          Completadas
        </button>
      </div>

      {/* Task list */}
      <ul className="space-y-3">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-neutral-800 rounded-lg p-3"
          >
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5"
              />
              <span className={task.done ? "line-through opacity-60" : ""}>
                {task.text}
              </span>
            </label>

            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-600 hover:bg-red-700 transition rounded-lg px-4 py-2 text-sm"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

}

export default App
