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

ReactDOM.render(
  <NavBar />,
  document.getElementById('root')
);