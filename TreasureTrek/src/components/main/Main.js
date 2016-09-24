import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// App components


class Main extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <Text style={{marginTop: 200, alignSelf: 'center'}}>Welcome to the main page</Text>
    );
  }
}

export default Main
