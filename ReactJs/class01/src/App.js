import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import { render } from '@testing-library/react';

// function App() {

class App extends Component {
  //constructor(props){} -> Sem constructor = field
    //super();
    //this.handlePClick = this.handlePClick.bind(this); //substuido por uma arrow function
    state = {
      name:"Weslley Prado",
      counter: 0
    };


handlePClick = () => {
  // console.log(`<p> Clicado {name}`);
  this.setState({name: "Prado"})
  //Quando muda o estado, o render irá ser chamado!
}

handleAClick = (event) => {
  event.preventDefault();
  const { counter } = this.state;
  //const nextCounter = counter++;
  this.setState({counter: counter + 1})
}

render() {
  //const name = this.state.name;
  const {name, counter} =  this.state;  // This is descructuring


return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p onClick={() => console.log('<p> clicado')}> */}
        <p onClick={this.handlePClick}>
                {name} {counter}
        </p>
        <a
        onClick={this.handleAClick}
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
}
export default App;
