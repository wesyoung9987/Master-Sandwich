import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Router from 'react-native-simple-router';

// App components
import Auth from './auth/Auth';

// Test Routes
// import AllAdvens from './allAdvens/AllAdvens';
// import MyAdventures from './MyAdventures/myAdventuresContainer';


class App extends Component {
  render() {
    var firstRoute = {
      name: "Welcome",
      component: Auth,
      hideNavigationBar: true,
      noStatusBar: true
    }

    return (

      <Router
        firstRoute ={ firstRoute }
        headerStyle={styles.header}
      />

    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  }
});

export default App;
