import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux-store';
import firebaseConfig from './config/firebaseConfig'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/compat/app'
import { createFirestoreInstance } from 'redux-firestore'
import './App.css';

//import './Appdark.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { GlobalProvider } from './api/context';
import {BrowserRouter as Router} from 'react-router-dom';
// import Card from './components/card'

import './postcard.css';


const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <Navbar/>
        <App />
        {/* <Card /> */}
        <Footer />
      </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
