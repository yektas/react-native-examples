import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDiFL_EVaKPcNIU-EtwFpi8ezZXvpqPYuI",
      authDomain: "auth-56336.firebaseapp.com",
      databaseURL: "https://auth-56336.firebaseio.com",
      projectId: "auth-56336",
      storageBucket: "auth-56336.appspot.com",
      messagingSenderId: "836668321835"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ marginTop: 20 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
