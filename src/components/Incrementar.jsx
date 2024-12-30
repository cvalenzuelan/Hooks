import React, { useState } from "react"
export const Incrementar = React.memo(({ incrementar }) => {
	const [numero, setNumero] = useState(1)
	const onInputChange = (event) => {
		event.preventDefault()
		setNumero(event.target.value);
	};
	console.log('REDIBUJANDO...')
	return (
		<>
			<div className="form-group">
				<label htmlFor="numero">Incrementador</label>
				<input type="text" className="form-control" name="numero" value={numero} onChange={onInputChange} />
			</div>
			<br />		<button className="btn btn-primary" onClick={() => incrementar(parseInt(numero))}>+{numero}</button>
		</>
	)
})
