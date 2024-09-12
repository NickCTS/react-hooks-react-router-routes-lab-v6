import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from your API or data source
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.time} minutes</p>
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
}

export default Home;
