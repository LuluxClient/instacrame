export const addPost = (post) => ({
    type: "ADD_POST",
    payload: post,
  });
  
  export const deletePost = (id) => ({
    type: "DELETE_POST",
    payload: id,
  });