import React from 'react';
import './App.css';
import placeholder from './assets/placeholder.jpg';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			photoData: null
			// user: null,
			// url: null,
		}
	}

	async componentDidMount() {
		console.log('component mounting started');
		let url = "https://api.unsplash.com/search/photos?client_id=IGlo6mau3iyLYRAHuWtm8D0eCV1CLrjasdbj0tS1Qqk&query=woman";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		this.setState({
			// user: data.results[0].user.username,
			// url: data.results[0].urls.raw,
			photoData: data.results,
			loading: false,
		});	
	}
	
	render() {
		return (
			<div className='container'>
				// <img src={placeholder} alt="test" />
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[0].urls.small }/>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[0].user.username}</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[1].urls.small }/>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[1].user.username}</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[2].urls.small }/>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[2].user.username}</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[3].urls.small }/>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[3].user.username}</p>
				</div>
				<div className='item'>
					<img src={(this.state.loading) ? placeholder : this.state.photoData[4].urls.small }/>
					<p>{(this.state.loading) ? 'loading...' : this.state.photoData[4].user.username}</p>
				</div>
			</div>
		)
	}
}

export default App
