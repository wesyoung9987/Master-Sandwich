import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
  AsyncStorage,
  AlertIOS,
  TouchableHighlight,
  Image,
  Navigator
} from 'react-native';

import Auth from '../auth/Auth';
import Menu from './Menu';


class MenuButton extends Component {


  goToMenu () {
    this.props.toRoute({
      name: "Menu",
      component: Menu,
      sceneConfig: Navigator.SceneConfigs.FloatFromLeft
    });
  }


  render() {
    // console.log("STORE:",AsyncStorage.getItem(STORAGE_KEY));

    return (
      <View>
        <TouchableHighlight onPress={this.goToMenu.bind(this)}>
          <Image style={{height: 40, width: 40, marginLeft: 10}} source={require('../../resources/mobile-menu-white.png')} />
        </TouchableHighlight>
      </View>
    );
  }


}

export default MenuButton;