import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCuzxIg2KZCgDFoMA1cjmaeIfp5UW9J3Ss",
  authDomain: "portfolio-628b9.firebaseapp.com",
  projectId: "portfolio-628b9",
  storageBucket: "portfolio-628b9.appspot.com",
  messagingSenderId: "754043319182",
  appId: "1:754043319182:web:5189f996c6d6fe409faadf",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
