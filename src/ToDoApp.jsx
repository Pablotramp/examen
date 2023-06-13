import { useState } from "react"
import ToDoForm from "./ToDoForm"
import { ToDoList } from "./ToDoList"

export default function ToDoApp() {
  const [toDo, setToDo] = useState([])
  const handleAddToDo = value => {
    value = value.trim()
    const clone = structuredClone(toDo)
    clone.push({
      id: Date.now(),
      checked: false,
      value
    })
    setToDo(clone)
  }
  const handleSelectAll = ()=> {
    if(!toDo.length) return
   const newToDo = toDo.map( item => {
     return {...item, checked:true}
   })
  setToDo(newToDo)
  }

const handleDeleteItem = id => {
  const data = toDo.filter(item=>item.id !== id)
  setToDo(data)
  
}
  
  return (
    <>
      <section className="grid gap-3">
        <h1 className="pb-4 text-4xl font-bold ">Tareas Pendientes</h1>
        {/* recibe el parametro de la funcion hijo */}
        <ToDoForm onAddToDo={handleAddToDo} />
        {/* Componente ToDoList */}
        <ToDoList toDo={toDo} onDeleteItemInList={handleDeleteItem} />
        {/* Opciones de ToDo */}
        <fieldset className="flex items-center gap-2">
          <button
            onClick={handleSelectAll}
            className="px-2 py-1 text-white rounded-2xl bg-slate-600 hover:bg-slate-800">Seleccionar Todo</button>
          <button className="px-2 py-1 text-white rounded-2xl bg-slate-400 ">Eliminar Todo</button>
        </fieldset>
      </section>
    </>
  )
}
