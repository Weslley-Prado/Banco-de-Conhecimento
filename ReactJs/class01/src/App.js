import './App.css';
import { Component } from 'react';

// function App() {


class App extends Component {
  //constructor(props){} -> Sem constructor = field
  //super();
  //this.handlePClick = this.handlePClick.bind(this); //substuido por uma arrow function
  state = {
    // name:"Weslley Prado",
    counter: 0,
    posts: [
      {
        id: 1,
        title: "The title",
        body: "The body"
      },
      {
        id: 2,
        title: "The title",
        body: "The body"
      },
      {
        id: 3,
        title: "The title",
        body: "The body"
      }
    ]
  };


  // handlePClick = () => {
  //   // console.log(`<p> Clicado {name}`);
  //   this.setState({name: "Prado"})
  //   //Quando muda o estado, o render irá ser chamado!
  // }

  // handleAClick = (event) => {
  //   event.preventDefault();
  //   const { counter } = this.state;
  //   //const nextCounter = counter++;
  //   this.setState({counter: counter + 1})
  // }

  //Lifecycle

  timeoutUpdate = null;

  componentDidMount() {    
    this.handleTimeout();  

  }

  handleTimeout = () => {
    const {posts, counter } = this.state;
    posts[0].title = "O titulo mudou"; 

   this.timeoutUpdate = setTimeout(() => 
    {this.setState({posts, counter: counter + 1
    })
  }, 1000);
  }

  componentDidUpdate() {
    this.handleTimeout();  

  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate); //Esse método serve para limpar lixo da página

  }
  render() {
    //const name = this.state.name;
    // const {name, counter} =  this.state;  // This is descructuring
    const { posts, counter } = this.state;

    return (
      <div className="App">


        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p onClick={() => console.log('<p> clicado')}> */}
        {/* <p onClick={this.handlePClick}>
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
      </header> */}
        {/* Toda vez que ver o map tem que informar a key  */}
        {posts.map(post => (
          <div key={post.id}>
            <h1> {counter}</h1>
            <h1 >{post.title}</h1>
            <p> {post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
