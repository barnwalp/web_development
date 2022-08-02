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
		favLanguage: "",
	})
	
	function handleInput(event) {
		console.log(event.target);
		const {name, value, type, checked} = event.target;
		setFormData(currData => {
			return({
				...currData,
				[name]: (type === "checkbox") ? checked : value
			})
		})
	}

	function handleSubmit(event) {
		// prevent the form to refresh the page after submit the 
		// button and to retain the data in the inputs
		event.preventDefault();
		console.log(formData);
	}

	return (
		<form onSubmit={handleSubmit}>
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
			<br/>
			<label htmlFor="favLanguage">What's your favorite language?</label>
			<br/>
			<select 
				id="favLanguage" 
				name="favLanguage"
				value={formData.favLanguage}
				onChange={handleInput}
			>
				<option value="javascript">javascript</option>
				<option value="python">python</option>
				<option value="java">java</option>
				<option value="C">C</option>
				<option value="C++">C++</option>
				<option value="Ruby">Ruby</option>
				<option value="Dart">Dart</option>
				<option value="Kotlin">Kotlin</option>
				<option value="Swift">Swift</option>
			</select>
			<br />
			<button>Submit</button>
		</form>
	)
}

export default Form
