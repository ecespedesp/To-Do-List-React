import './App.css'

function App() {

  return (
    <div className='text-center'>
      <h1 className='text-[38px] '>Listador de tareas</h1>
      <div className='flex justify-center my-5 gap-[15px]'>
        <input className='px-2 py-1 bg-[gray] rounded-lg text-[black] font-semibold' placeholder='Ingrese una tarea'></input>
        <button className=''>Agregar</button>
      </div>
    </div>
  )
}

export default App
