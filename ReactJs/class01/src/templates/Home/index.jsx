import './style.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button/Button';

// function App() {


class Home extends Component {

  state = {

    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage:2

  };

  async componentDidMount() {
    // this.handleTimeout();  
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos.slice(page, postsPerPage),
    allPosts: postsAndPhotos })
  }

  loadMorePosts = () => {
    const{
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page: nextPage});
  }

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className="button-container">
              
        <Button text="Load More Post"
        onClick = {this.loadMorePosts} 
        disabled={noMorePosts}/>

        </div>
      </section>

    );
  }
}
export default Home;
