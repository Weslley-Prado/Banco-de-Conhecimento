import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

// function App() {


class App extends Component {
  //constructor(props){} -> Sem constructor = field
  //super();
  //this.handlePClick = this.handlePClick.bind(this); //substuido por uma arrow function
  state = {
    // name:"Weslley Prado",
    // counter: 0,
    posts: []
    //   {
    //     id: 1,
    //     title: "The title",
    //     body: "The body"
    //   },
    //   {
    //     id: 2,
    //     title: "The title",
    //     body: "The body"
    //   },
    //   {
    //     id: 3,
    //     title: "The title",
    //     body: "The body"
    //   }
    // ]
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
    // this.handleTimeout();  
    this.loadPosts()

  }

  loadPosts = async () => {
   const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
   const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

   const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
   const postsJson = await posts.json();
   const photosJson = await photos.json();
   //Unindo array pelo menor
   const postsAndPhotos = postsJson.map((post, index) => {
       return { ...post, cover: photosJson[index].url }
   });

   this.setState({posts: postsAndPhotos})
   
  }

  componentDidUpdate() {
    // this.handleTimeout();  

  }

  componentWillUnmount() {
    // clearTimeout(this.timeoutUpdate); //Esse método serve para limpar lixo da página

  }


  // handleTimeout = () => {
  //   const {posts, counter } = this.state;
  //   posts[0].title = "O titulo mudou"; 

  //  this.timeoutUpdate = setTimeout(() => 
  //   {this.setState({posts, counter: counter + 1
  //   })
  // }, 1000);
  // }

  render() {
    //const name = this.state.name;
    // const {name, counter} =  this.state;  // This is descructuring
    const { posts } = this.state;

    return (
      <section className='container'>     
         <div className="posts">


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
          <PostCard 
          key={post.id}
          title={post.title}
          body={post.body}
          cover={post.cover}
          id={post.id}
          />
        ))}
      </div>
      </section>

    );
  }
}
export default App;
