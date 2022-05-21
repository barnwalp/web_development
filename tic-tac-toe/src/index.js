import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// functions in react is simpler way to write component which dont
// have their own state, they take props as input and return what 
// should be rendered
class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
  render() {
    return (
      <button 
        className='square' 
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
        {/* {this.props.val} */}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    // in Javascript classes, you need to always call super when defining
    // the constructor of subclass. All React component classes that
    // have a constructor should start with a super(props) call.
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}  
      />
    )
  }

  handleClick(i) {
    // Immutability is preferred as it allows us to keep previous
    // version and reuse them later. Immutable data can easily determine
    // if changes have been matchMedia, which helps to determin when
    // a component requires re-rendering
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
