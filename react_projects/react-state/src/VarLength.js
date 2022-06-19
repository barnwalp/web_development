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
		// avoiding leak memory
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
