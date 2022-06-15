import React from "react";

function App() {
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

  return (
    <div className="App">
			<h1>Is React state important?</h1>
			<p>{isImportant}</p>
			<button onClick={handleClick} className="btn">Toggle</button>
    </div>
  )
}

export default App;
