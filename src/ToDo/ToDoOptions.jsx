import PropTypes from 'prop-types'

export function ToDoOptions ({onSelectAll, onDeleteAll}) {
  return (
    <fieldset className="flex items-center gap-2">
    <button
      onClick={onSelectAll}
      className="px-2 py-1 text-white rounded-2xl bg-slate-600 hover:bg-slate-800">Seleccionar Todo</button>
    <button
      onClick={onDeleteAll}
      className="px-2 py-1 text-white rounded-2xl bg-slate-600 hover:bg-slate-800">Eliminar Todo</button>
  </fieldset>
)
}

ToDoOptions.propTypes = {
  onSelectAll: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired
}

