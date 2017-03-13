import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBEVBGfTAyLwmsQg119pJ5xGFu3cHC2M_I',
            authDomain: 'react-manager-abae4.firebaseapp.com',
            databaseURL: 'https://react-manager-abae4.firebaseio.com',
            storageBucket: 'react-manager-abae4.appspot.com',
            messagingSenderId: '641280863075'
        };
        firebase.initializeApp(config);   
    }
    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
