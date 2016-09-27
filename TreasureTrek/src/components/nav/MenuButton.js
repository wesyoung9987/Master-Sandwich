import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
  AsyncStorage,
  AlertIOS,
  TouchableHighlight
} from 'react-native';

import Auth from '../auth/Auth';
import Menu from './Menu';


class MenuButton extends Component {


  goToMenu () {
    this.props.toRoute({
      name: "Menu",
      component: Menu
    });
  }


  render() {
    // console.log("STORE:",AsyncStorage.getItem(STORAGE_KEY));

    return (
      <View>
        <TouchableHighlight onPress={this.goToMenu.bind(this)}>
          <Text>MENU</Text>
        </TouchableHighlight>
      </View>
    );
  }


}

export default MenuButton;