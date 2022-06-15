import React from "react";

function App() {
	// declaring a state
	// useState returns an array
	const [result, func] = React.useState('Yes');
	console.log(result);

	//to change the state value, func is used
	func('No');
  return (
    <div className="App">
			<h1>Is React state important?</h1>
			<p>{result}</p>
    </div>
  )
}

export default App;
