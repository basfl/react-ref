import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
       
        axios.get("https://jsonplaceholder.typicode.com/posts").then(resposne => {
            console.log(resposne)
            const posts = resposne.data.slice(0, 4)
            //fake the author
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: "babak"
                }
            })
            this.setState({
                posts: updatedPosts
            })

        }).catch(err => {
            console.log(err)
        })

    }

    render() {
        const post = this.state.posts.map(post => {
            return  <Post key={post.id}
                    title={post.title}
                    author={post.author}
                    postClick={()=>this.postSelectedHandler(post.id)} />
            
        });
        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
        console.log("************", id)

    }
}

export default Blog;