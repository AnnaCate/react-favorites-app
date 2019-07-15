import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';

const Details = props => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/movies/' + props.id)
      .then(response => response.json())
      .then(res => setMovie(res));
  }, []);

  const handleDelete = e => {
    e.preventDefault();
    fetch('http://localhost:3000/movies/' + props.id, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(navigate('/movies'));
  };

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>{movie.title}</h1>
        </div>
      </section>
      <section className='section'>
        <p>
          <span className='has-text-weight-bold'>Year Released:</span> {movie.year}
        </p>
        <p>
          <span className='has-text-weight-bold'>Rating:</span> {movie.rated}
        </p>
        <p>
          <span className='has-text-weight-bold'>Genre(s):</span> {movie.genre}
        </p>
        <p>
          <span className='has-text-weight-bold'>Director:</span> {movie.director}
        </p>
      </section>
      <div className='field is-grouped section'>
        <div className='control'>
          <Link to={`/movies/${movie.id}/edit`}>
            <button className='button'>Edit</button>
          </Link>
        </div>
        <div className='control'>
          <button className='button' onClick={handleDelete}>
            Delete
          </button>
        </div>
        <div className='control'>
          <Link to='/movies'>
            <button className='button'>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
