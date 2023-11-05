import { getPosts } from '../services/api';
import { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="special-title">Posts</h2>
      <ul>
        {posts.map((post, key) => (
          <li key={key}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;