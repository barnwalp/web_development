import React from "react";
import './BasicState.css';

function BasicState() {
	// isImportant is the variable while setIsImportant is the func
	// to change the variable.

	// one this to note is that react will render the components and 
	// it's child components every time state is changed or new props
	// from parent component is passed
	const [isImportant, setIsImportant] = React.useState("Yes");

	function handleClick() {
		if(isImportant === "Yes") {
			setIsImportant("No");
		} else {
			setIsImportant("Yes");
		}
	}
	
	// if current value of state is required to determine new value
	// then, it is always advisable to pass a callback function to 
	// the setter function, instead of using the state directly.
	// This callback function will receive the current value of state,
	// which can be used to change the state
	function handleClickBetter() {
		setIsImportant(function(preValue){
			if(preValue === "Yes"){
				return "No";
			} else {
				return "Yes";
			}
		});
	}

  return (
    <div className="App">
			<h1>Is React state important?</h1>
			<p>{isImportant}</p>
			<button onClick={handleClickBetter} className="btn">Toggle</button>
    </div>
  )
}

export default BasicState;
