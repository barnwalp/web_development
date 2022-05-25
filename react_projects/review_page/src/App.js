import logo from './logo.svg';
import './App.css';

const loadData = async () => {
  let unsplash;
  let url = "https://api.unsplash.com/search/photos?";
  let key = "IGlo6mau3iyLYRAHuWtm8D0eCV1CLrjasdbj0tS1Qqk";
  let query = "woman";
  url = url + 'client_id=' + key + '&query=' + query;
  try {
    const res = await fetch(url);
    unsplash = await res.json();
    console.log(unsplash);
    return unsplash;
  } catch(err) {
    console.log(err);
  }
}
loadData();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
