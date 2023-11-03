import { useState } from 'react';
import Post from './Post';

function Posts() {
    const [myPosts, setMyPosts] = useState([]);

    function handleAddPost(post) {
        setMyPosts(prevPosts => [...prevPosts, post]);
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                handleAddPost({ title, body });
                e.target.reset();
            }}>
                <input type="text" name="title" placeholder="Title" />
                <textarea name="body" placeholder="Body"></textarea>
                <button type="submit">Add Post</button>
            </form>
            {myPosts.map((post, index) => (
                <Post key={index} title={post.title} body={post.body} />
            ))}
        </div>
    );
}

export default Posts;
