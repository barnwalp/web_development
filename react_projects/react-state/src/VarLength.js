import React from "react";
import './VarLength.css';


function VarLength() {
	const [length, setLength] = React.useState(window.innerWidth);

	// function handleClick() {
	// 	console.log(window.innerWidth);
	// 	setLength(window.innerWidth);
	// }

	React.useEffect(() => {
		window.addEventListener("resize", function(){
			setLength(window.innerWidth);
		})
	}, []);

	return (
		<div className="var-container">
			<button className="btn">Window inner item</button>
			<p>{length}</p>
		</div>
	)
}

export default VarLength;
