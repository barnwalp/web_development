import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			user: null,
		}
	}

	async componentDidMount() {
		console.log('component mounting started');
		let url = "https://api.unsplash.com/search/photos?client_id=IGlo6mau3iyLYRAHuWtm8D0eCV1CLrjasdbj0tS1Qqk&query=woman";
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	}
	
	render() {
		return (
			<div className='container'>
				<div className='item'>
					{(this.state.loading) ? <p>loading...</p> : <p>loaded</p>}
				</div>
			</div>
		)
	}
}

export default App
