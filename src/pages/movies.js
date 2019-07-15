import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import FavoriteMovies from '../components/FavoriteMovies';

const Movies = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(res => setMovies(res));
  }, []);

  const removeMovie = id => {
    fetch('http://localhost:3000/movies/' + id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        const newMovies = movies.filter(movie => movie.id !== id);
        setMovies(newMovies);
      });
  };

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Favorite Movies</h1>
          <Link to='/movies/add'>
            <button className='button'>Add New</button>
          </Link>
        </div>
      </section>
      <section className='section'>
        <div>
          <FavoriteMovies movies={movies} removeMovie={removeMovie} />
        </div>
      </section>
    </div>
  );
};

export default Movies;
