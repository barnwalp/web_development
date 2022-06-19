import React from "react";
import placeholder from './assets/placeholder.jpg';
import './ObjectState.css';
import star_full from './assets/star_full.png';
import star_empty from './assets/star_empty.png';
import Star from './Star.js';


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

	const star = thingsObj.isFavorite ? star_full : star_empty;

	return (
		<div className="card-container">
			<img className="card-image" src={placeholder}/>
			<Star location={star} handleClick={toggleFavorite}/>
			<p>{thingsObj.firstName} {thingsObj.lastName}</p>
			<p>{thingsObj.contact}</p>
			<p>{thingsObj.email}</p>
		</div>
	)
}

export default ObjectState;
