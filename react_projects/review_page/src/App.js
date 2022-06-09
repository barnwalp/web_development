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

	async loadData() {
		let link=[];
		let user=[];
		let unsplashPics;
		let url = "https://api.unsplash.com/search/photos?";
		let key = "IGlo6mau3iyLYRAHuWtm8D0eCV1CLrjasdbj0tS1Qqk";
		let query = "woman";
		url = url + 'client_id=' + key + '&query=' + query;
		const res = await fetch(url);
		if(res.ok) {
			unsplashPics = await res.json();
			for (let i=0; i<3; i++){
				link.push(unsplashPics.results[i].urls.full);
				user.push(unsplashPics.results[i].user.username);
			}
		this.setState({
				imgUrl: link,
				imgUser: user,
			})
		} else {
			console.log('could not get data: ', + res.status);
		}
	}
}

function Items() {
	const a = new App();
	const pics = a.loadData();
	pics.then((data) => {
		return (
			<div className="container">
				<div className="item">
					<img src={data.results[0].urls.full} alt="woman" />
					<p>{data.results[0].user.username}</p>
				</div>
			</div>
		)
	});
}

export default Items;
