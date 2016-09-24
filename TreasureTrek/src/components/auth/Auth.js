// Import libraries for making a component
import React from 'react';
import {Text, View, TextInput, AsyncStorage, TouchableHighlight, AlertIOS} from 'react-native';
import t from 'tcomb-form-native';

// App components
import Main from '../main/Main.js'

// Create Session Storage Key for AsyncStorage
var STORAGE_KEY = 'id_token';

var Form = t.form.Form;

var Person = t.struct({
  email: t.String,
  password: t.String
});

// Auth Component Class
var Auth = React.createClass({

 // Update the local storage session
 // after sign up / sign in and refreshing session token
 async _onValueChange(item, selectedValue) {
    try {
        await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
    // Test AsyncStorage
    var session = AsyncStorage.getItem(STORAGE_KEY);
    console.log('stored session: ', session);
  },

  // Clear Form
  clearForm() {
    this.setState({ input: null });
  },

  // SignUp Handler
  userSignUp() {
    var input = this.refs.form.getValue();
    console.log('$$$$ email: ', input.email)
    console.log('$$$$ pass: ', input.password)
    if (input) {
      fetch("https://treasure-trek.herokuapp.com/api/signup", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: input.email,
          password: input.password
        })
      }).then(function (res){
        return res.json()
      }).then((data)=> {
        console.log("Response data: ", data.userid);
        //Check for Valid Token
        if (data.userid) {
          this._onValueChange(STORAGE_KEY, data.userid);
          AlertIOS.alert( "Signup Success!" );
          this.props.navigator.push({
            title: "Main Page",
            component: Main
          });
        } else {
          AlertIOS.alert( "Someone has that email. Signup with a new email or Login" );
          this.clearForm();
        }
      })
      .done();
    }
  },

  // SignIn Handler
  userLogin() {
    var input = this.refs.form.getValue();
    if (input) {
      fetch("https://treasure-trek.herokuapp.com/api/signin", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: input.email,
          password: input.password
        })
      }).then(function (res){
        return res.json()
      }).then((data)=> {
        console.log("Response data: ", data.userid);
        if (data.userid) {
          this._onValueChange(STORAGE_KEY, data.userid);
          AlertIOS.alert( "Login Success!" );
          this.props.navigator.push({
              title: "Main Page",
              component: Main
          });
        } else {
          AlertIOS.alert( "Invalid Email/Password. Try again." );
          this.clearForm();
        }
      })
      .done();
    }
  },



  // Logout Handler
  async userLogout() {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        AlertIOS.alert("Logout Success!");
        this.clearForm();
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
  },

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Signup/Login </Text>
            </View>
            <View style={styles.row}>
                <Form
                    ref="form"
                    type={Person}
                    autoCorrect={false}
                />
            </View>
            <View style={styles.row}>
                <TouchableHighlight style={styles.button} onPress={this.userSignUp} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.userLogin} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.userLogout} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableHighlight>
            </View>

        </View>


      );
  }
});

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

// Make componenet available for other parts of the app
export default Auth;
