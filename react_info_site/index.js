const root = document.getElementById('root');

// only PascalCase is supported as a funciton nav in React
const NavBar = () => {
  return (
    <nav>
      <h1>website</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contract</li>
      </ul>
    </nav>
  )
}

let hero_section = (
  <div className="hero-container">
    <h3>Hero Section</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusantium molestiae soluta repellat quia nobis dolore laboriosam maiores reprehenderit sapiente quos eum, temporibus natus doloremque perspiciatis, quaerat et beatae corrupti.</p>
  </div>
)

const Hero = () => {
  return hero_section;
}

// hero_section is actually an object which is returned by JSX
// and render method uses this object to create the DOM
console.log(hero_section);

ReactDOM.render(
  <div>
    <NavBar />
    <Hero />
  </div>,
  root
);
