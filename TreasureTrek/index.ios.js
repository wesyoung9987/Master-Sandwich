/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native'

// App components
import Header from './src/components/auth/Header'
import Auth from './src/components/auth/Auth'
// Testing AllAdvens
import AllAdvens from './src/components/allAdvens/AllAdvens'


class TreasureTrek extends Component {
  render() {
    var authRoute = {
      title: "Welcome to All Adventures",
      component: AllAdvens
    }
    return (
      // <View>
      //   <AllAdvens/>
      // </View>
      <NavigatorIOS
        initialRoute ={ authRoute }
        style={{ flex: 1 }}
      />

    );
  }
}




AppRegistry.registerComponent('TreasureTrek', () => TreasureTrek);
