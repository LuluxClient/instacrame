const PostList = ({ posts }) => {

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