/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/components/auth/Header';
import Auth from './src/components/auth/Auth';


class TreasureTrek extends Component {
  render() {
    return (
      <View>
        <Header welcomeText={'Welcome to TreasureTrek!'} />
        <Auth authText={'Sign Up'} />
      </View>

    );
  }
}




AppRegistry.registerComponent('TreasureTrek', () => TreasureTrek);
