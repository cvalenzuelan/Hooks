import { useState } from "react";

export const useForm = (initialForm = {}) => {
	const [formulario, setFormulario] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormulario({
			...formulario,
			[name]: value,
		});
	};

	const resetForm = () => {
		setFormulario(initialForm);
	};

	return {
		...formulario,
		formulario,
		onInputChange,
		resetForm,
	};
};
