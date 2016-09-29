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
import Main from '../main/Main';
import MenuButton from './MenuButton';
import MyAdventures from '../MyAdventures/myAdventuresContainer';
import AllAdventures from '../AllAdventures/AllAdventuresContainer';
import MyCreatedAdventures from '../myCreatedAdventures/myCreatedAdventures';

var STORAGE_KEY = 'id_token';

class Menu extends Component {


  toAllAds () {
    this.props.resetToRoute({
      name: "All Adventures",
      component: AllAdventures,
      leftCorner: MenuButton
    });
  }

  toMyAds () {
    this.props.resetToRoute({
      name: "My Adventures",
      component: MyAdventures,
      leftCorner: MenuButton
    });
  }

  toCreateAds () {
    this.props.resetToRoute({
      name: "Create Adventures",
      component: MyCreatedAdventures, // Swap out w/ CreateAdventures Component
      leftCorner: MenuButton
    });
  }

  async userLogout() {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        AlertIOS.alert("Logout Success!");
        this.props.resetToRoute({
          name: "Login",
          component: Auth
        })
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {

    return (
      <View>
        <Text style={{marginTop: 200, alignSelf: 'center'}}>Choose A Route!</Text>
        <TouchableHighlight style={styles.button} onPress={this.toMyAds.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>My Adventures</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.toAllAds.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>All Adventures</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.toCreateAds.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Create Adventures</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.userLogout.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }


}


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    paddingTop: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle1: {
    fontSize: 12,
  },
  textStyle2: {
    fontSize: 8,
  },
  submitStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
}

export default Menu;
