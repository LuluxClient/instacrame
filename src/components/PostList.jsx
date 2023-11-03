const PostList = ({ url, movies }) => {

  return (
    <div>
      <h2 className="special-title">My List</h2>
      <ul>
        {movies.map((movie, key) => (
          <li key={key}>
            <p>{movie.title}</p>
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              // /t/p/w220_and_h330_face/tEY81I7lpiHaLJa7AZ3O4vWXmJo.jpgF
              alt="movie illustration"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;