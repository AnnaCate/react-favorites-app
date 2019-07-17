import React, {useState, useReducer, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import {merge} from 'ramda';

const reducer = (state, {type, payload}) => {
  if (type === 'SET_MOVIE') {
    return payload;
  }
  if (type === 'SET_TITLE') {
    return merge(state, {title: payload});
  }
  if (type === 'SET_YEAR') {
    return merge(state, {year: payload});
  }
  if (type === 'SET_GENRE') {
    return merge(state, {genre: payload});
  }
  if (type === 'SET_RATING') {
    return merge(state, {rated: payload});
  }
  if (type === 'SET_DIRECTOR') {
    return merge(state, {director: payload});
  }

  return state;
};

const Edit = props => {
  const [state, dispatch] = useReducer(reducer, {
    id: null,
    title: '',
    rated: '',
    year: '',
    genre: '',
    director: '',
  });

  useEffect(() => {
    fetch('http://localhost:3000/movies/' + props.id)
      .then(r => r.json())
      .then(movie =>
        dispatch({
          type: 'SET_MOVIE',
          payload: movie,
        })
      );
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/movies/' + props.id, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then(r => r.json())
      .then(res => {
        navigate('/movies/' + props.id);
      });
  };

  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <h1 className='title'>Edit Favorite Movie</h1>
        </div>
      </section>

      <section className='section'>
        <form className='form' autoComplete='off' onSubmit={handleSubmit}>
          <div className='field'>
            <label className='label'>Title:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter a movie title'
                onChange={e =>
                  dispatch({
                    type: 'SET_TITLE',
                    payload: e.target.value,
                  })
                }
                style={{width: 500, marginBottom: '1rem'}}
                value={state.title}
              />
            </div>

            <label className='label'>Year:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the release year'
                onChange={e =>
                  dispatch({
                    type: 'SET_YEAR',
                    payload: e.target.value,
                  })
                }
                style={{width: 180, marginBottom: '1rem'}}
                value={state.year}
              />
            </div>

            <label className='label'>Rating:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the rating (PG, R, etc.)'
                onChange={e =>
                  dispatch({
                    type: 'SET_RATING',
                    payload: e.target.value,
                  })
                }
                style={{width: 230, marginBottom: '1rem'}}
                value={state.rated}
              />
            </div>

            <label className='label'>Genre(s):</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the genre(s)'
                onChange={e =>
                  dispatch({
                    type: 'SET_GENRE',
                    payload: e.target.value,
                  })
                }
                style={{width: 400, marginBottom: '1rem'}}
                value={state.genre}
              />
            </div>

            <label className='label'>Director:</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Enter the name of the director'
                onChange={e =>
                  dispatch({
                    type: 'SET_DIRECTOR',
                    payload: e.target.value,
                  })
                }
                style={{width: 400, marginBottom: '1rem'}}
                value={state.director}
              />
            </div>
          </div>

          <div className='field is-grouped'>
            <div className='control'>
              <button className='button'>Submit</button>
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

export default Edit;
