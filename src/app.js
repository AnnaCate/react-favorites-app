import React from 'react';
import {Router} from '@reach/router';

import Home from './home';
import Movies from './pages/movies';
import Details from './pages/details';
import Edit from './pages/edit';
import Add from './pages/add';

export default function App() {
  return (
    <Router>
      <Home path='/' />
      <Edit path='/movies/:id/edit' />
      <Details path='/movies/:id' />
      <Add path='/movies/add' />
      <Movies path='/movies' />
    </Router>
  );
}
