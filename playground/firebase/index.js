import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCg1DnvUJfuIjGTZJ1pD6GwgvNyaqYGHHQ",
    authDomain: "clinton-todo-app.firebaseapp.com",
    databaseURL: "https://clinton-todo-app.firebaseio.com",
    projectId: "clinton-todo-app",
    storageBucket: "clinton-todo-app.appspot.com",
    messagingSenderId: "759765593129"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      id: 1,
      name: 'Clinton',
      age: 25
    }
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('child added', snapshot.key, snapshot.val());
  });

  var newTodo = todosRef.push({text: 'Get money'});
  var newTodo = todosRef.push({text: 'Get more money'});
