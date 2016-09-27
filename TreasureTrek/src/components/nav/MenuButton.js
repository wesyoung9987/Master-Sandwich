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

var STORAGE_KEY = 'id_token';

class MenuButton extends Component {

  state = {
    expanded: false
  }

  expand () {
    var bool = !this.state.expanded
    this.setState({
      expanded: bool
    });
  }

  goToMenu () {
    this.props.toRoute({
      name: "Menu",
      component: Menu
    });
  }

  async userLogout() {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        AlertIOS.alert("Logout Success!");
        // console.log("PAGE?:", this.props);
        // this.props.pageChange("login");
        this.props.toRoute({
          name: "Login",
          component: Auth,
          leftCorner: Corner
        })
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
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