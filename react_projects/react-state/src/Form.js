import React from "react";
import './Form.css';

function Form() {
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		comment: "",
		isFriendly: true,
	})
	
	console.log(formData);

	function handleInput(event) {
		const {name, value, type, checked} = event.target;
		setFormData(currData => {
			return({
				...currData,
				[name]: (type === "input") ? value : checked
			})
		})
	}

	return (
		<div className="form">
			<input 
				className="input" 
				onChange={handleInput} 
				type="text"
				name="firstName" 
				placeholder="First Name" 
				// Conceptually it makes no difference, but it ensures that
				// input tag is not maintaining its own state but relying on
				// react for the data
				value={formData.firstName}
			/>
			<input 
				className="input" 
				onChange={handleInput} 
				type="text" 
				name="lastName" 
				placeholder="Last Name" 
				value={formData.lastName}
			/>
			<input 
				className="input" 
				onChange={handleInput} 
				type="text" 
				name="email" 
				placeholder="Email" 
				value={formData.email}
			/>
			<textarea 
				name="comment" 
				onChange={handleInput}
				value={formData.comment} 
				placeholder="Comment"
				cols="30" 
				rows="10" 
			/>
			<input 
				name="isFriendly"
				type="checkbox" 
				checked={formData.isFriendly}
				id="isFriendly"
				onChange={handleInput}
			/>
			<label htmlFor="isFriendly">Are you friendly?</label>
		</div>
	)
}

export default Form
