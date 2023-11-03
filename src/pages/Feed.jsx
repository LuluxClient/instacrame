import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../redux/actions/postActions";

const Feed = () => {
  const [postName, setPostName] = useState("");
  const [postId, setPostId] = useState(null);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

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

  const handleDelete = () => {
    dispatch(deletePost(postId));
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
    <div>
      <h2>Poster</h2>
      <input
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        plaeholder="Ton post"
      />

      {postId ? (
        <button onClick={handleUpdate}>Mettre à jour le movie</button>
      ) : (
        <button onClick={handleAdd}>Ajouter un movie</button>
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.name}
            <button onClick={() => handleEdit(post)}>Editer</button>
            <button onClick={() => handleDelete(post.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;




// import React from "react";
// import Navbar from "../components/Navbar";
// import { useAtom } from "jotai";
// import { userAtom } from "../utils/globalState";

// const Feed = () => {
//     const [user] = useAtom(userAtom);
//     return (
        
//         <div>
//             <Navbar />
//             <h1>Bienvenue sur Instacrame {user.name}</h1>
//         </div>
//     );
// };

// export default Feed;