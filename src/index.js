import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



initializeApp({
  apiKey: "AIzaSyBrX_A-F05d85ETT79nL-_RhX93DCZXlq8",
  authDomain: "saviour-network.firebaseapp.com",
  projectId: "saviour-network",
  storageBucket: "saviour-network.appspot.com",
  messagingSenderId: "214368256524",
  appId: "1:214368256524:web:94e43a924c8cd493916429",
  measurementId: "G-RCREX71SHV"
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
