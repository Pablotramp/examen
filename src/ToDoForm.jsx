import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

export default function ToDoForm ({ onAddToDo }) { // cuando el hijo pasa datos al padre FIJO tiene una función
const [item, setItem] = useState('')
const [disabled, setDisabled] = useState(true)
const addRef = useRef(null)

const classBoton = disabled ? ' bg-slate-400'  :  'bg-slate-600  hover:bg-slate-800' 

// o funcion handle change o (e)=>setItem(e.target.value)
const handleChange = e=> {
  setItem(e.target.value)
  if(e.target.value.length){setDisabled(false)} else {setDisabled(true)}
}

const handleSubmit = e => {
  e.preventDefault()
  onAddToDo(item) // paso el parametro al padre
  addRef.current.select()
}

return (
<form onSubmit={handleSubmit}>
<fieldset className="flex gap-1 item-center">
  <input
  ref={addRef}
    className="px-2 py-1 border rounded border-slate-800"
    type="text"
    value={item}
    required
    onChange={handleChange} 
    />
  <button
  disabled={disabled}
  className={`px-2 py-1 text-white rounded-2xl ${classBoton}`}>Añadir</button>
</fieldset>
</form>
  )
}

ToDoForm.propTypes = {
  onAddToDo: PropTypes.func
}
