import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import { useForm } from "../hooks/useForm";

export const UsuariosComponentes = () => {
	// Se llama el hooks de formulario
	const { url, formulario, onInputChange } = useForm({ url: '' })
	const [fetchUrl, setFetchUrl] = useState(null);
	const { data, isLoading = false, errors } = useFetch(fetchUrl)
	const busqueda = () => {
		setFetchUrl(formulario.url); // Solo actualiza la URL cuando se presiona el botón
	};
	return (
		<>
			<h1>Lista de Usuarios</h1>
			<div className="form-group">
				<label htmlFor="url">URL</label>
				<input type="text" className="form-control" name="url" value={url} onChange={onInputChange} />
				<button onClick={busqueda} className="btn btn-primary">Buscar</button>
			</div>
			<br />
			{isLoading
				? <h4>CARGANDO...</h4>
				: errors
					? <p>Ha ocurrido un error</p>
					: <table className="table">
						<thead className="table table-dark">
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Nombre</th>
								{/* <th scope="col">Email</th>
								<th scope="col">Website</th> */}
							</tr>
						</thead>
						<tbody>
							{data.map(user => {
								return (
									<tr key={user.id}>
										<th scope="row">{user.id}</th>
										<td>{user.name}</td>
										{/* <td>{user.email}</td>
										<td>{user.website}</td> */}
									</tr>
								)
							})}

						</tbody>
					</table>
			}
		</>
	)
}
