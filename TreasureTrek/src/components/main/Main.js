import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyCreatedAdventures from '../myCreatedAdventures/myCreatedAdventures';

// App components


class Main extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <MyCreatedAdventures/>
    );
  }
}

export default Main
