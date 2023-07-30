import React, { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  useEffect(() => {
    // Parse the URL parameters to get the code
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Set up your client_id, client_secret, and redirect_uri
    const clientId = 'YOUR_CLIENT_ID';
    const clientSecret = 'YOUR_CLIENT_SECRET';
    const redirectUri = 'http://localhost:3000/login';

    // Make a POST request to the Unsplash API
    axios.post('https://unsplash.com/oauth/token', {
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code: code,
      grant_type: 'authorization_code',
    })
    .then((response) => {
      // Save the access token to local storage
      localStorage.setItem('unsplashAccessToken', response.data.access_token);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <div>
      <h1>Logging you in...</h1>
    </div>
  );
};

export default Login;
