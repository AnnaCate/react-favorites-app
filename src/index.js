import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import {Auth0Provider} from './react-auth0-wrapper';
import config from './auth_config.json';
import App from './app';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
    <App />
  </Auth0Provider>,
  document.getElementById('app')
);
