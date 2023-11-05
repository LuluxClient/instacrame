import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../redux/actions/postActions";
import { useAtom } from "jotai";
import { userAtom } from "../utils/globalState";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";
import Like from "../components/Like";
import '../styles/cookie.css'
import { createPost } from '../services/api';
import axios from "axios";
const Feed = () => {
  const [postName, setPostName] = useState("");
  const [postId, setPostId] = useState(null);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [user] = useAtom(userAtom);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (postName) {
      const newPost = {
        id: Date.now(),
        name: postName,
      };
      //C'est normal que je laisse ça vu que l'api ne fonctionne pas et si elle fonctionnait il y aura 2 fois le même post
      //Donc c'est pour cela que je laisse ça sinon je pourais juste retirer la ligne dispatch(addpost(newPost)))
      dispatch(addPost(newPost)); 
      setPostName("");
      try {
        const Post = await axios.post(createPost(), {
          title: postName,
          body: "This is a new post",
          userId: 1,
        });
        console.log("Un nouveau post a été send à l'api", Post);
      } catch (error) {
        console.error("Chef y'a une erreur:", error);
      }
      
    }
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleEdit = (post) => {
    setPostName(post.name);
    setPostId(post.id);
  };

  const handleUpdate = () => {
    if (postId) {
      handleDelete(postId);
      handleAdd();
      setPostId(null);
    }
  };

  return (
    <div className="feed-container">
      <Navbar />
      <h1 className="welcome-text">Bienvenue sur Instacrame {user.name}</h1>
      <h2>Poster</h2>
      <input
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        placeholder="Ton post"
      />

      {postId ? (
        <button onClick={handleUpdate}>Modifier</button>
      ) : (
        <button onClick={handleAdd}>Faire un post</button>
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="post-content">
              <p>{post.name}</p>
              <Like />
            </div>
            <div className="post-buttons">
              <button onClick={() => handleEdit(post)}>Editer</button>
              <button onClick={() => handleDelete(post.id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
      <PostList posts={posts} />
    </div>
  );
};

export default Feed;
