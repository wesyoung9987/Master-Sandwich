import React, { Component } from 'react';
import { View, Text, AsyncStorage, AlertIOS } from 'react-native';
import UserImage from './UserImage';

class UserProfile extends Component {

  state = {
    myInfo: []
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
    this.getMyInfo();
  }

  render(){
    return (
      <View style={{ flex: 1}}>
        <UserImage/>
        <Text>{this.state.myInfo.username}</Text>
      </View>
    );
  }
};

export default UserProfile;