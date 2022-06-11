import React from 'react'
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: [],
			imgUser: [],
		};
	}

	loadData() {
		console.log('loadData is being run');
		const fetchUserData = async () => {
			let link=[];
			let user=[];
			let unsplashPics;
			let url = "https://api.unsplash.com/search/photos?";
			let key = "IGlo6mau3iyLYRAHuWtm8D0eCV1CLrjasdbj0tS1Qqk";
			let query = "woman";
			url = url + 'client_id=' + key + '&query=' + query;
			const res = await fetch(url);
			if(res.ok) {
				console.log('response is ok');
				for (let i=0; i<3; i++) {
					link.push(unsplashPics.results[i].urls.full);
					user.push(unsplashPics.results[i].user.username);
				}
				this.setState({
					imgUrl: link,
					imgUser: user,
				})
				console.log('checking imgUrl in state:');
				console.log(this.state.imgUser);
			} else {
				console.log('could not get data: ', + res.status);
			}
		}
		fetchUserData();
	}

	render() {
		return (
			<div className="container">
				<div className="item">
				</div>
			</div>
		)
	}
}

export default App;
