import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts';
import { Posts } from './components/Posts/index';

// function App() {


class App extends Component {
 
  state = {
   
    posts: []
    
  };


 

  async componentDidMount() {
    // this.handleTimeout();  
    await this.loadPosts()

  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos})

  }

  // componentDidUpdate() {
  //   // this.handleTimeout();  

  // }

  // componentWillUnmount() {
  //   // clearTimeout(this.timeoutUpdate); //Esse método serve para limpar lixo da página

  // }


  render() {
    //const name = this.state.name;
    // const {name, counter} =  this.state;  // This is descructuring
    const { posts } = this.state;

    return (
      <section className='container'>     
        <Posts posts={posts}/>
      </section>

    );
  }
}
export default App;
