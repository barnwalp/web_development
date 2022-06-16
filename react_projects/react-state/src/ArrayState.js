import React from 'react';
import './ArrayState.css';

function ArrayState() {
	const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']);

	function handleClick() {
		setThingsArray((currentArray) => {
			const newValue = `Thing ${currentArray.length + 1}`;
			return [...currentArray, newValue];
		});
	}

	const content = thingsArray.map(item => <p key={item}>{item}</p>);

	return (
		<div className="array-state">
			<button onClick={handleClick} className='btn'>Add</button>
			{content}
		</div>
	)
}

export default ArrayState;
