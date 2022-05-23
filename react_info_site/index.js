const root = document.getElementById('root');

const Header = () => {
  return (
    <nav className='nav'>
      <img src="data:image/png;base64,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"></img>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contract</li>
      </ul>
    </nav>
  )
}

// let hero_section = (
//   <div className="hero-container">
//     <h3>Hero Section</h3>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusantium molestiae soluta repellat quia nobis dolore laboriosam maiores reprehenderit sapiente quos eum, temporibus natus doloremque perspiciatis, quaerat et beatae corrupti.</p>
//   </div>
// )

// hero_section is actually an object which is returned by JSX
// and render method uses this object to create the DOM
// console.log(hero_section);

// const Hero = () => {
//   return hero_section;
// }

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
      <small>&#169; 2022 Barnwal Development. All right reserved.</small>
    </footer>
  )
}
ReactDOM.render(
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>,
  root
);