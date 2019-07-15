import React from 'react';
import {Link} from '@reach/router';
import {prop, sortBy} from 'ramda';

const FavoriteMovies = ({movies = [], removeMovie}) => {
  const moviesSorted = sortBy(prop('title'), movies);
  return (
    <ul className='columns is-multiline is-centered'>
      {moviesSorted.map(movie => (
        <li key={movie.id} className='column is-one-quarter'>
          <div className='card'>
            <div className='card-header'>
              <h2 className='card-header-title is-centered'>{movie.title}</h2>
            </div>
            <div className='card-content'>
              <div
                className='content field is-grouped'
                style={{display: 'flex', justifyContent: 'center'}}>
                <div className='control'>
                  <Link to={`/movies/${movie.id}`}>
                    <button className='button'>View</button>
                  </Link>
                </div>
                <div className='control'>
                  <Link to={`/movies/${movie.id}/edit`}>
                    <button className='button'>Edit</button>
                  </Link>
                </div>
                <div className='control'>
                  <button className='button' onClick={() => removeMovie(movie.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteMovies;
