import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD0PWf31bmrThVfqEQ75UPFj36EquchotY",
      authDomain: "manager-55a63.firebaseapp.com",
      databaseURL: "https://manager-55a63.firebaseio.com",
      projectId: "manager-55a63",
      storageBucket: "manager-55a63.appspot.com",
      messagingSenderId: "828226101969"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
