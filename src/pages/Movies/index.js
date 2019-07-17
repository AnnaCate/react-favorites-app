import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import FavoriteMovies from './FavoriteMovies';
import imgsrc from '../../undraw_like_dislike_1dfj.svg';
import NavBar from '../../Navbar';

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
        <NavBar />
        {/* <Link to='/'>
          <img
            src={imgsrc}
            alt='Home'
            width='50px'
            style={{position: 'absolute', right: '1rem', top: '1rem'}}
          />
        </Link> */}
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
