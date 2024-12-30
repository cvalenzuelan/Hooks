import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const initailState = [{
	id: new Date().getTime(),
	tarea: 'Explicar Reducers',
	finalizada: false
}]
const tareaReducer = (state = initailState, action = {}) => {
	switch (action.type) {
		case 'Agregar':
			return [...state, action.payload]
		case 'Finalizar':
			return state.map(tarea => {
				if (tarea.id === action.payload) {
					return { ...tarea, finalizada: !tarea.finalizada }
				}
				return tarea
			})
		case 'Eliminar':
			return state.filter(tarea => tarea.id !== action.payload)
		case 'Limpiar':
			return []
		default:
			return state
	}
}

export const ListaTareas = () => {
	const [tareaState, dispatch] = useReducer(tareaReducer, initailState)
	// console.log(tareaState)
	// Se llama el hooks de formulario
	const { tarea, formulario, onInputChange, resetForm } = useForm({ tarea: '' })
	// Agrega tarea
	const agregarTarea = (event) => {
		event.preventDefault()
		if (formulario.tarea === '') {
			return
		}
		const nuevaTarea = {
			id: new Date().getTime(),
			tarea: formulario.tarea,
			finalizada: false
		}
		console.log(nuevaTarea)
		const action = {
			type: 'Agregar',
			payload: nuevaTarea
		}
		dispatch(action)
		resetForm()
	}
	// Finaliza una tarea existente
	const finalizarTarea = ({ id }) => {
		const action = {
			type: 'Finalizar',
			payload: id
		}
		dispatch(action)
	}
	// Elimina una tarea es especifico
	const eliminarTarea = ({ id }) => {
		const action = {
			type: 'Eliminar',
			payload: id
		}
		dispatch(action)
	}
	// Elimina todo el listado de tareas
	const eliminarTodo = () => {
		const action = {
			type: 'Limpiar',
			payload: ''
		}
		dispatch(action)
	}
	return (
		<form onSubmit={agregarTarea}>
			<div className="form-group">
				<input type="text" className="form-control" name="tarea" placeholder="Ingresa una tarea" value={tarea} onChange={onInputChange} />
			</div>
			<button type="submit" className="btn btn-primary">Agregar</button>
			<button type="button" className="btn btn-danger" onClick={eliminarTodo}>Limpiar</button>
			<hr />
			<ul className="list-group">
				{tareaState.map(item => {
					return (
						<li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
							<span>{item.tarea}   {item.finalizada ? '✅' : '❌'}</span>
							<input type="checkbox" value={item.finalizada} onChange={() => finalizarTarea(item)} />
							<button className="btn btn-danger" onClick={() => eliminarTarea(item)}>Borrar</button>
						</li>
					)
				})}
			</ul>
		</form>
	)
}
