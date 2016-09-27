import React, { Component } from 'react';
import { View, Text, AsyncStorage, AlertIOS } from 'react-native';
import Header from './../auth/Header.js';
import MyAdventuresList from './myAdventuresList.js';
import Auth from '../auth/Auth.js';

class myAdventuresContainer extends Component {

  state = {
    adventures: []
  };

  getMyAdventures () {
    AsyncStorage.getItem('id_token')
      .then(token=>{
        fetch("https://treasure-trek.herokuapp.com/api/fetchMine",{
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
          this.setState({adventures: data});
        }).catch((error) => {
          console.log("ERROR:",error);
          this.handleError();
        }).done();
      });
  }

  handleError () {
    AsyncStorage.removeItem('id_token')
      .then(()=>{
        this.errorRedirectToLogin("No Session - Redirecting");
      }).catch(error => {
        console.log('AsyncStorage error: ' + error.message);
        this.errorRedirectToLogin("Internal Error - Redirecting")
      });
  }

  errorRedirectToLogin (message) {
    AlertIOS.alert(message);
    this.props.resetToRoute({
      name: "Login",
      component: Auth
    });
  }

  componentWillMount () {
    this.getMyAdventures();
  }

  render () {
    // console.log("STATE:",this.state);
    return (
      <View style={styles.containerStyle}>
        <MyAdventuresList nav={this.props}></MyAdventuresList>
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 75
  }
};

export default myAdventuresContainer;