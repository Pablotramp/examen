import PropTypes from 'prop-types'

function ToDoItem({ itemValue, onDeleteItem, onSelectItem }) {
  const { id, value, checked } = itemValue
  // const [checkedItem, setCheckedItem] = useState(checked)
  const classBoton = checked ? 'bg-slate-600 hover:bg-red-600' : 'bg-white'
  const handelchange = () => {
    onSelectItem(id)
    // setCheckedItem(target.checked) 
  }

  const handleDelete = ()=> {
    onDeleteItem(id)
  }
  
  return (
    <li className="flex justify-between p-2 border-b-2 Values-center">
      <div>
        <input
          onChange={handelchange}
          checked={checked}
          className="mr-2"
          type="checkbox" />{value}
      </div>
      <button
      onClick={handleDelete}
      disabled={!checked}
      className= {`px-2 text-white ${classBoton} rounded-2xl`} >X</button>
    </li>
  )
}

ToDoItem.propTypes = {
  itemValue: PropTypes.object,
  onDeleteItem: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired
}

export default ToDoItem