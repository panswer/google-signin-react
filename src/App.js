import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GoogleButton from './components/GoogleSign';
import ReadJSON from './components/RaadJSON';

/* 
  <div class="g-signin2" data-onsuccess="onSignIn"></div>
    <a href="#" onclick="signOut();">Sign out</a>
    <script>
        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function() {
                console.log('User signed out.');
            });
        }
    </script>
    <script>
        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

            var id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/google');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                console.log('Signed in as: ' + xhr.responseText);
            };
            xhr.send('idtoken=' + id_token);
        }
    </script>
*/

function App() {
  return (
    <div className="App">
      <h1>Mi App</h1>
      <GoogleButton />
      <ReadJSON />
    </div>
  );
}

export default App;
