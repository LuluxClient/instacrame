import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../redux/actions/postActions";
import { useAtom } from "jotai";
import { userAtom } from "../utils/globalState";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";
import Like from "../components/Like";

const Feed = () => {
  const [postName, setPostName] = useState("");
  const [postId, setPostId] = useState(null);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [user] = useAtom(userAtom);

  const handleAdd = () => {
    if (postName) {
      const newPost = {
        id: Date.now(),
        name: postName,
      };
      dispatch(addPost(newPost));
      setPostName("");
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
