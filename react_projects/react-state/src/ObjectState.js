import React from "react";
import placeholder from './placeholder.jpg';
import './ObjectState.css';
import star_full from './star_full.png'
import star_empty from './star_empty.png'

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
			<img onClick={toggleFavorite} className="star" src={star}/>
			<p>{thingsObj.firstName} {thingsObj.lastName}</p>
			<p>{thingsObj.contact}</p>
			<p>{thingsObj.email}</p>
		</div>
	)
}

export default ObjectState;
