import React from "react";
import './Form.css';

function Form() {
	const [formData, setFormData] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		comment: "",
		isFriendly: true,
		employement: "",
	})
	
	console.log(formData);

	function handleInput(event) {
		const {name, value, type, checked} = event.target;
		setFormData(currData => {
			return({
				...currData,
				[name]: (type === "checkbox") ? checked : value
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
			<fieldset>
				<legend>Current Employement Status</legend>

				<input 
					name="employement"
					type="radio"
					id="full-time"
					value="full-time"
					onChange={handleInput}
					checked={formData.employement === "full-time"}
				/>
				<label htmlFor="full-time">Full-Time</label>
				<br/>
				<input 
					name="employement"
					type="radio"
					id="part-time"
					value="part-time"
					onChange={handleInput}
					checked={formData.employement === "part-time"}
				/>
				<label htmlFor="part-time">Part-Time</label>
				<br/>
				<input 
					name="employement"
					type="radio"
					id="Unemployed"
					value="Unemployed"
					onChange={handleInput}
					checked={formData.employement === "Unemployed"}
				/>
				<label htmlFor="Unemployed">Unemployed</label>
			</fieldset>
		</div>
	)
}

export default Form
