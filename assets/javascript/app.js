// Initializing Firebase
var config = {
    apiKey: "AIzaSyDBGIwKC1eALMjEA6wNo9L45PgWdeZghEw",
    authDomain: "project-1-36f35.firebaseapp.com",
    databaseURL: "https://project-1-36f35.firebaseio.com",
    projectId: "project-1-36f35",
    storageBucket: "project-1-36f35.appspot.com",
    };

    firebase.initializeApp(config);

    // Reference to database service
    var database = firebase.database();