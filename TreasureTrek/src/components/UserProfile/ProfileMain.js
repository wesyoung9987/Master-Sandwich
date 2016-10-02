import React, { Component } from 'react';
import { View, Text, AsyncStorage, AlertIOS, Image, TouchableHighlight } from 'react-native';
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
        <View style={styles.imageContainer}>

          <UserImage/>

        </View>
        <View style={styles.fixToBottom}>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Image style={styles.imageStyle} source={require('../../resources/spinning-coin.gif')} />
            </View>
            <View style={styles.contentStyle}>

              <Text style={styles.textInfo}>15000</Text>

            </View>

          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>Level 5</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>500 Coins to Next Level</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>Adventures in Progress: 3</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>Created Adventures: 7</Text>
            </View>
          </View>
          <View style={styles.infoContainer2}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo2}>Email: {this.state.myInfo.email}</Text>
            </View>
          </View>
          <TouchableHighlight

            underlayColor={'#00ffff'}>
            <View style={styles.infoContainer2}>
              <View style={styles.contentStyle}>
                <Text style={styles.textInfo2}>Update Profile Picture</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
};

const styles = {
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  textInfo: {
    color: 'white',
    fontSize: 20,
  },
  infoContainer: {
    height: 45,
    backgroundColor: '#48BBEC',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
    flexDirection: 'row',
  },
  infoContainer2: {
    height: 45,
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
    flexDirection: 'row',
  },
  textInfo2: {
    color: '#48BBEC',
    fontSize: 20,
    marginLeft: 5
  },
  fixToBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
}

export default UserProfile;