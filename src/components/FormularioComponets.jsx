import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"

export const FormularioComponets = () => {
	const focusRef = useRef()
	const initalForm = {
		usuario: "",
		email: "",
		password: "",
	}
	const { formulario, usuario, email, password, onInputChange, resetForm } = useForm(initalForm)

	const onSubmit = (event) => {
		event.preventDefault()
		console.log(formulario)
		resetForm()

	}
	useEffect(() => {
		focusRef.current.focus()
	}, [])


	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label htmlFor="usuario">Usuario</label>
				<input ref={focusRef} type="text" className="form-control" name="usuario" placeholder="Ingresa tu nombre de usuario" value={usuario} onChange={onInputChange} />
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input type="email" className="form-control" name="email" placeholder="Ingresa tu Email" value={email} onChange={onInputChange} />
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={onInputChange} />
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	)
}
