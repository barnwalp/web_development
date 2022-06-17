import React from "react";
import placeholder from './placeholder.jpg';
import './ObjectState.css';

function ObjectState() {
	const [thingsObj, setThingsObj] = React.useState({
		firstName: 'kriti',
		lastName: 'Jhawar',
		contact: '+91 978 768 3269',
		email: 'kritijhawar@gmail.com',
		isFavorite: false,
	});

	function toggleFavorite(){
		setThingsObj(currObj => {
			const newObj = {
				...currObj,
				isFavorite: !currObj.isFavorite
			}
			return newObj;
		})
	}

	const star = thingsObj.isFavorite ? "5-star" : "1-star";

	return (
		<div className="card-container">
			<img className="card-image" src={placeholder}/>
			<p onClick={toggleFavorite}>{star}</p>
			<p>{thingsObj.firstName} {thingsObj.lastName}</p>
			<p>{thingsObj.contact}</p>
			<p>{thingsObj.email}</p>
		</div>
	)
}

export default ObjectState;
