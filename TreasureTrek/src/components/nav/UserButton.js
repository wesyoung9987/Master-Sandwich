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
import ProfileMain from '../UserProfile/ProfileMain.js';


class UserButton extends Component {

  state = {
    myInfo: {}
  };

  getMyInfo () {
    AsyncStorage.getItem('id_token')
      .then(token=>{
        fetch("https://treasure-trek.herokuapp.com/api/myInfo",{
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': token
            }
        }).then(function (res){
          return res.json()
        }).then((data)=> {
          // set state or do something else with data
          console.log('GET data: ', data)
          this.setState({myInfo: data});
        }).catch((error) => {
          console.log("ERROR:",error);
          this.handleError();
        }).done();
      });
  }

  componentWillMount () {
    this.getMyInfo();
  }

  goToMenu () {
    this.props.toRoute({
      name: "My Profile",
      component: ProfileMain,
      sceneConfig: Navigator.SceneConfigs.FloatFromLeft
    });
  }


  render() {
    // console.log("STORE:",AsyncStorage.getItem(STORAGE_KEY));

    return (
      <View>
        <TouchableHighlight onPress={this.goToMenu.bind(this)}>
          <Image style={{height: 40, width: 40, borderRadius: 20, marginRight: 20}} source={{uri: this.state.myInfo.photo} || require('../../resources/user-placeholder.png')} />
        </TouchableHighlight>
      </View>
    );
  }


}

export default UserButton;