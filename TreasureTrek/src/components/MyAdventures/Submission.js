import React, {Component} from 'react';
import {Text, View, TextInput, AsyncStorage, TouchableHighlight, AlertIOS} from 'react-native';
import t from 'tcomb-form-native';
import AdventureSolution from './AdventureSolution.js';
// Riddle Submission Form
var Form = t.form.Form;

var Solution = t.struct({solution: t.String});

//console.log('$$$$$$$$$', this.props.id);

// Submission Component
var Submission = React.createClass({

  clearForm() {
    this.setState({input: null});
  },

  toRiddles() {
    this.props.nav.reset();
  },

  submitAnswer() {
    this.clearForm();
    var input = this.refs.form.getValue();
    console.log('PROPS: ', this.props)
    console.log('answer ', this.props.answer)
    console.log('input ', input.solution)
    var riddleNumber = this.props.num - 1 ;

    if (input.solution === this.props.answer) {
      AlertIOS.alert( "CORRECT!" );
      AsyncStorage.getItem('id_token')
        .then(token=>{
          fetch("https://treasure-trek.herokuapp.com/api/updateProgress", {
            method: "PUT",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': token
            },
            body: JSON.stringify({
              adventureid: this.props.id,    //Adventure ID
              riddleNumber: riddleNumber, //Riddle # is zero index based
            })
          }).then(function(res){
            return res.json()
          }).then((data)=> {
            // Reroute Navigation To Home
            this.props.completion = true;
            this.toRiddles();
            console.log('Posted! Data Response: ', data);

          }).catch((error)=> {
            console.error("ERROR: ", error);
            this.handleError();
          }).done();
      });
    } else {
      AlertIOS.alert( "Nice guess, but wrong answer. Try again." );

    }
  },

 handleError () {
  AsyncStorage.removeItem('id_token')
    .then(()=>{
      this.errorRedirectToLogin("No Session - Redirecting");
    }).catch(error => {
      console.log('AsyncStorage error: ' + error.message);
      this.errorRedirectToLogin("Internal Error - Redirecting")
    });
  },

  errorRedirectToLogin (message) {
    AlertIOS.alert(message);
    this.props.resetToRoute({
      name: "Login",
      component: Auth
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Enter Answer</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Solution}
            autoCorrect={false}
          />
        </View>
        <View style={styles.row}>
          <TouchableHighlight style={styles.button}
            onPress={this.submitAnswer}
            underlayColor='#99d9f4'
          >
            <Text style={styles.buttonText}>Submit</Text>
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
export default Submission;

