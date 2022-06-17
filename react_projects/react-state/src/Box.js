import React from "react";
import './Box.css';


function Box() {
	const [boxes, setBoxes] = React.useState([
		{
			id: 1,
			on: true
		},
		{
			id: 2,
			on: false
		},
		{
			id: 3,
			on: true
		},
		{
			id: 4,
			on: false
		},
		{
			id: 5,
			on: true
		},
		{
			id: 6,
			on: false
		},
	]);

	const squares = boxes.map(item => {
		return (
			<div className="box" id={item.id}>{item.id}</div>
		)
	})

	return (
		<div className="box-container">
			{squares}
		</div>
	)
}

export default Box;
