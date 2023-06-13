import PropTypes from 'prop-types'
import ToDoItem from './components/ToDoItem'


export function ToDoList ({ toDo = [], onDeleteItemInList }) {
  return (
    <ul className="grid gap-2 p-2 w-80">
      {/* Componente ToDoItem */}
      {
        toDo.map(item => (
          <ToDoItem onDeleteItem={onDeleteItemInList} key={item?.id} itemValue={item}/>
        ))
      }
    </ul>
  )
}

ToDoList.propTypes = {
  toDo: PropTypes.array,
  onDeleteItemInList: PropTypes.func
}

