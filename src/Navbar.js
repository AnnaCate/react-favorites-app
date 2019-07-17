// src/components/NavBar.js

import React from 'react';
import {useAuth0} from './react-auth0-wrapper';
import {Link} from '@reach/router';
import imgsrc from './undraw_like_dislike_1dfj.svg';

const NavBar = () => {
  const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          className='button is-pulled-right is-link is-outlined'
          style={{margin: '1rem'}}
          onClick={() => loginWithRedirect({})}>
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button
          className='button is-pulled-right is-link'
          style={{margin: '1rem'}}
          onClick={() => logout()}>
          Log out
        </button>
      )}
      <Link to='/'>
        <img
          src={imgsrc}
          alt='Home'
          width='50px'
          style={{position: 'absolute', right: '1rem', top: '1rem'}}
        />
      </Link>
    </div>
  );
};

export default NavBar;
