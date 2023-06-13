import PropTypes from 'prop-types'
import { useState } from 'react'

function ToDoItem({ itemValue, onDeleteItem }) {
  const { id, value, checked } = itemValue
  const [checkedItem, setCheckedItem] = useState(checked)
  const classBoton = checkedItem ? 'bg-red-800' : 'bg-white'
  const handelchange = ({target}) => {
    setCheckedItem(target.checked) 
  }

  const handleDelete = ()=> {
    onDeleteItem(id)
  }
  
  return (
    <li className="flex justify-between p-2 border-b-2 Values-center">
      <div>
        <input
          onChange={handelchange}
          checked={checkedItem}
          className="mr-2"
          type="checkbox" />{value}
      </div>
      <button
      onClick={handleDelete}
      disabled={!checkedItem}
      className= {`px-2 text-white ${classBoton} rounded-2xl`} >X</button>
    </li>
  )
}

ToDoItem.propTypes = {
  itemValue: PropTypes.object,
  onDeleteItem: PropTypes.func
}

export default ToDoItem