import React, {useEffect} from 'react';
import {Router} from '@reach/router';
import {useAuth0} from './react-auth0-wrapper';

import Home from './home';
import Movies from './pages/Movies';
import MovieDetails from './pages/Movies/details';
import EditMovie from './pages/Movies/edit';
import AddMovie from './pages/Movies/add';

const PrivateRoute = ({component: Component, path, ...rest}) => {
  const {isAuthenticated, loginWithRedirect} = useAuth0();

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: {targetUrl: path},
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  return isAuthenticated ? <Component path={path} {...rest} /> : null;
};

export default function App() {
  return (
    <Router>
      <Home path='/' />
      <PrivateRoute component={EditMovie} path='/movies/:id/edit' />
      <PrivateRoute component={MovieDetails} path='/movies/:id' />
      <PrivateRoute component={AddMovie} path='/movies/add' />
      <PrivateRoute component={Movies} path='/movies' />
    </Router>
  );
}
