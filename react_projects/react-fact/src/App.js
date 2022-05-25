import React from "react";
import logo from './assets/logo192.png';

const Header = () => {
  return (
    <nav className='nav'>
      <img src={logo} alt="logo" />
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contract</li>
      </ul>
    </nav>
  )
}

const MainContent = () => {
  return (
    <div className="container">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <small>&#169; 2022 Pankaj Barnwal. All right reserved</small>
    </footer>
  )
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
