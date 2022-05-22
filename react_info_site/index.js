console.log('test');

class App extends React.Component {
  render() {
    return (
      <div className="app-content">
        <h1>Hello world</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h1>Rendering from ReactDom</h1>, document.getElementById('root'));