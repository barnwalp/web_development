import React from "react";
import './Form.css';

function Form() {
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
	})
	
	console.log(formData);

	function handleInput(event) {
		setFormData(currData => {
			return({
				...currData,
				[event.target.name]: event.target.value
			})
		})
	}

	return (
		<div className="form">
			<input className="input" onChange={handleInput} type="text" name="firstName" placeholder="First Name" />
			<input className="input" onChange={handleInput} type="text" name="lastName" placeholder="Last Name" />
			// <input className="btn" onChange={handleInput} type="submit" />
		</div>
	)
}

export default Form
