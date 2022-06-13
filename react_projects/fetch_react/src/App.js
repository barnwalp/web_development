import React from 'react';
import './App.scss';
import placeholder from './assets/placeholder.jpg';
import { FaStar } from "react-icons/fa";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			photoData: null
		}
	}

	async componentDidMount() {
		console.log('component mounting started');
		let url = "https://api.unsplash.com/search/photos?client_id=IGlo6mau3iyLYRAHuWtm8D0eCV1CLrjasdbj0tS1Qqk&query=woman";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		this.setState({
			photoData: data.results,
			loading: false,
		});	
	}
	/* Method 1
	 * let openSlots = 9;		// 0 means sold out 
	 *
	 * return (
	 *	 // creating a sold out banner over an image
	 *	 {openSlot === 0 && <div className="card--badge">SOLD OUT</div>}
	 * )
	 *
	 * Method 2
	 * let openSlot = 7;
	 * let location = online;
	 * let badgeText;
	 *
	 * if (openSlot === 0) {
	 *	 badgeText = 'SOLD OUT';
	 * } else if ( location === 'online') {
	 *	 badgeText = 'Online';
	 * } 
	 *
	 * return (
	 *   // creating either sold out or online banner over an image
	 *	 {badgeText && <div className="card--badge">{badgeText}<div>}
	 * )
	 *
	 *
	 *
	 *
	 *
	 */

	
	render() {
		let items = [];
		for(let i=0; i<9; i++) {
			items.push(
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[i].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[i].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
			)	
		}
		return (
			<div className='carousal'>
				{items}
			  {/*
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[0].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[0].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[1].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[1].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[2].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[2].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[3].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[3].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[4].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[4].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[5].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[5].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[6].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[6].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[7].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[7].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[8].urls.small }/>
					<p> 5.0 < FaStar/> (USA)</p>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[8].user.username}</p>
					<p>Curabitur feugiat semper tempus</p>
				</div> */}
			</div>
		)
	}
}

export default App
