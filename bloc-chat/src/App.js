import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';

<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCZ_Cocp2kCTsshklBpP8R9qh51NFYFJi8",
    authDomain: "bloc-chat-bf61b.firebaseapp.com",
    databaseURL: "https://bloc-chat-bf61b.firebaseio.com",
    projectId: "bloc-chat-bf61b",
    storageBucket: "bloc-chat-bf61b.appspot.com",
    messagingSenderId: "383255930451"
  };
  firebase.initializeApp(config);
</script>

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RoomList component={firebase}/>
        </main>
      </div>
    );
  }
}

export default App;
