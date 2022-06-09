// Callback Example - 1
// -----------------------
setTimeout(() => {
    console.log("Joel");
    setTimeout(() => {
        console.log("Victoria");
        setTimeout(() => {
            console.log("John");
            setTimeout(() => {
                console.log("Doe");
                setTimeout(() => {
                    console.log("Sarah");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

// Callback Example - 2
// -----------------------
function doStep1(init, callback) {
	const result = init + 1;
	callback(result);
}
function doStep2(init, callback) {
	const result = init + 2;
	callback(result);
}

function doOperation() {
	doStep1(0, (result) => {
		doStep2(result, (fResult) => {
			console.log(fResult);
		});
	});
}

doOperation();

// Promise Example - 1
// -----------------------
function addName(name, time) {
	return new Promise((resolve, reject) => {
		if(name) {
			setTimeout(() => {
				console.log(name);
				resolve();
			}, time);
		} else {
			reject('No such name');
		}
	});
}
addName('joel', 2000)
	.then(() => addName('victoria', 2000))
	.then(() => addName('John', 2000))
	.then(() => addName('Doe', 2000))
	.then(() => addName('Jane', 2000))
	.catch((err) => console.log(err));

// Promise Example - 2
// -----------------------
const getData = () => {
	let url = 'bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';
	fetch(url)
		.then(response => {
			if(response.ok) {
				return response.json();
			} else {
				throw new Error(`HTTP Error: ${response.status}`);
			}
		})
		.then(json_data => console.log(json_data))
		.catch(error => {
			console.error(`could not get products: ${error}`);
		});
}
getData();

// Promise.all example - 3
// --------------------------
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
	.then(responses => {
		for (const response of responses){
			console.log(`${response.url}---${response.status}`);
		}
	})
	.catch(err => console.log('failed to fetch', + err));

// Async await example - 1
// --------------------------

const fetchData = async () => {
	try {
		let response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
		if (response.ok) {
			let data = await response.json();
			return data;
		} else {
			throw new Error('HTTP Error: ' +response.status);
		}
	}
	catch(error) {
		console.log('could not get products: ' + error);
	}
}

const jsonPromise = fetchData();
jsonPromise.then(json => console.log(json));


