import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"
export const CallBackComponent = () => {
	const [contador, setContador] = useState(0)
	const incrementarPadre = useCallback((numero) => {
		setContador(cont => cont + numero)
	}, [])
	return (
		<>
			<h1>Contador: {contador}</h1>
			<Incrementar incrementar={incrementarPadre}></Incrementar>
		</>
	)
}
