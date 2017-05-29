import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCg1DnvUJfuIjGTZJ1pD6GwgvNyaqYGHHQ",
      authDomain: "clinton-todo-app.firebaseapp.com",
      databaseURL: "https://clinton-todo-app.firebaseio.com",
      projectId: "clinton-todo-app",
      storageBucket: "clinton-todo-app.appspot.com",
      messagingSenderId: "759765593129"
    };
    firebase.initializeApp(config);
} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
