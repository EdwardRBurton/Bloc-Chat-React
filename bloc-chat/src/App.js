import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';

<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>

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


class App extends Component {
  render() {
    return (
      <div>
          <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
