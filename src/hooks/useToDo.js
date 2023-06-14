import { useState } from "react"

export function useToDo (initialToDo = []) {
  const [toDo, setToDo] = useState(initialToDo)

  const getToDos = () => {
    return structuredClone(toDo)
  }

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

  const handleSelectAll = () => {
    if (!toDo.length) return
    const newToDo = toDo.map(item => {
      return { ...item, checked: true }
    })
    setToDo(newToDo)
  }

  const handleDeleteItem = id => {
    const data = toDo.filter(item => item.id !== id)
    setToDo(data)
  }

  const handleSelectItem = id => {
    /* COPILOTS CHOICE */
    // const data = toDo.map(item => {
    //   if(item.id === id) {
    //     return {...item, checked: !item.checked}
    //   }
    //   return item
    // })
    // setToDo(data)

    const indice = toDo.findIndex(item => item.id === id) // devuelve el indice del elemento
    // const task = structuredClone(toDo.at(indice)) // devuelve el elemento
    const task = { ...toDo.at(indice), checked: !toDo.at(indice).checked } // tambien devuelve el elemento
    // const checked = !task.checked // lo pasé a la linea anterior
    // task.checked = checked
    // setToDo(toDo.with(indice, task)) // devuelve un nuevo array con el elemento modificado solo funciona en chrome

    // const clone = structuredClone(toDo)
    // clone[indice] = task // tambien funciona clone[indice].checked = !clone[indice].checked
    // setToDo(clone)

    // clone.splice(indice, 1, task)

    setToDo([...toDo.slice(0, indice), task, ...toDo.slice(indice + 1, toDo.length)])
  }

  const handleDeleteAll = () => {
    const checkedAll = toDo.find(item => item.checked===false)
    if(!checkedAll) setToDo([])
  }

  return {  
  handleAddToDo, 
  handleSelectAll, 
  handleDeleteItem, 
  handleSelectItem, 
  handleDeleteAll,
  getToDos

}  
}