/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';
import Header from './src/components/auth/Header';
import Auth from './src/components/auth/Auth';


class TreasureTrek extends Component {
  render() {
    var authRoute = {
      title: "Welcome to TreasureTrek",
      component: Auth
    }
    return (
      // <View>
      //   <Header welcomeText={'Welcome to TreasureTrek!'} />
      //   <Auth authText={'Sign Up'} />
      // </View>
      <NavigatorIOS
        initialRoute ={ authRoute }
        style={{ flex: 1 }}
      />

    );
  }
}




AppRegistry.registerComponent('TreasureTrek', () => TreasureTrek);
