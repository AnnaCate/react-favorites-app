import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    id: null,
    title: '',
    rated: '',
    year: '',
    genre: '',
    director: '',
  });

  const handleTitleChange = e => {
    setNewMovie({...newMovie, title: e.target.value});
  };
  const handleRatedChange = e => {
    setNewMovie({...newMovie, rated: e.target.value});
  };
  const handleYearChange = e => {
    setNewMovie({...newMovie, year: e.target.value});
  };
  const handleGenreChange = e => {
    setNewMovie({...newMovie, genre: e.target.value});
  };
  const handleDirectorChange = e => {
    setNewMovie({...newMovie, director: e.target.value});
  };

  const handleAddNew = e => {
    e.preventDefault();

    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then(response => response.json())
      .then(() => navigate('/movies'))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Add a New Favorite Movie</h1>
        </div>
      </section>

      <section className='section'>
        <form className='form' autoComplete='off'>
          <div className='field'>
            <label className='label'>Title:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter a movie title'
                onChange={handleTitleChange}
                style={{width: 500, marginBottom: '1rem'}}
              />
            </div>

            <label className='label'>Year:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the release year'
                onChange={handleYearChange}
                style={{width: 180, marginBottom: '1rem'}}
              />
            </div>

            <label className='label'>Rating:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the rating (PG, R, etc.)'
                onChange={handleRatedChange}
                style={{width: 230, marginBottom: '1rem'}}
              />
            </div>

            <label className='label'>Genre(s):</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the genre(s)'
                onChange={handleGenreChange}
                style={{width: 400, marginBottom: '1rem'}}
              />
            </div>

            <label className='label'>Director:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the name of the director'
                onChange={handleDirectorChange}
                style={{width: 400, marginBottom: '1rem'}}
              />
            </div>
          </div>

          <div className='field is-grouped'>
            <div className='control'>
              <button className='button' onClick={handleAddNew}>
                Add
              </button>
            </div>
            <div className='control'>
              <Link to='/movies'>
                <button className='button'>Cancel</button>
              </Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddMovie;
