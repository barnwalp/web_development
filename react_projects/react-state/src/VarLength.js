import React from "react";
import './VarLength.css';


function VarLength() {
	const [length, setLength] = React.useState({
		width: window.innerWidth,
		show: true,
	});

	function toggle() {
		setLength(currLength => ({
			...currLength,
			show: !currLength.show,
		}))
	}

	// useEffect is a react hook that manages the side-effect in react.
	// component rendering and side-effect logic are independent. side
	// effects are fetch request, timer function, manipulating DOM directly.
	//
	// useEffect runs side-effects independently of rendering. Ex-
	// useEffect(callback, [depedencies]), callback contains the side-
	// effect logic whereas depedencies is an optional array, callback
	// is executed only if depedencies have changed between rendering
	//
	// when depedencies is not provided, the side-effect runs after
	// every rendering. If depedencies is an empty array, the side effect 
	// will run once after the initial rendering. If it's an state/props,
	// the side-effect runs only when any depedency value changes

	React.useEffect(() => {
		function getWidth() {
			setLength((currLength) => {
				return ({
					...currLength,
					width: window.innerWidth
				})
			});
		}
		window.addEventListener("resize", getWidth)
		// avoiding memory leak
		return function() {
			window.removeEventListener("resize", getWidth);
		}
	}, []);

	return (
		<div className="var-container">
			<button onClick={toggle} className="toggle">Toggle width output</button>
			{length.show && <p>{length.width}</p>}
		</div>
	)
}

export default VarLength;
