import React from "react";
import './BasicState.css';

function BasicState() {
	/*
	// declaring a state
	// useState returns an array
	const [result, func] = React.useState('Yes');
	console.log(result);

	//to change the state value, func is used
	func('No');
	*/

	// Better way to manage state
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
