import ToDoForm from "./ToDoForm"
import { ToDoList } from "./ToDoList"
import { ToDoOptions } from "./ToDoOptions"
import { useToDo } from "./hooks/useToDo"

export default function ToDoApp() {
 const {  getToDos, 
  handleAddToDo, 
  handleSelectAll, 
  handleDeleteItem, 
  handleSelectItem, 
  handleDeleteAll
}  =  useToDo([{id:1, value:'hola', checked:true}])
  return (
    <>
      <section className="grid gap-3">
        <h1 className="pb-4 text-4xl font-bold ">Tareas Pendientes</h1>
        {/* recibe el parametro de la funcion hijo */}
        <ToDoForm onAddToDo={handleAddToDo} />
        {/* Componente ToDoList */}
        <ToDoList toDo={getToDos()} onSelectItemInList={handleSelectItem} onDeleteItemInList={handleDeleteItem} />
        {/* Opciones de ToDoOptions */}
        <ToDoOptions onSelectAll={handleSelectAll} onDeleteAll={handleDeleteAll} />
       
      </section>
    </>
  )
}