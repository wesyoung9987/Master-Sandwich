// Import libraries for making a component
import React from 'react';
import {Text, View, TextInput} from 'react-native';


// Make Component
const Auth = (props) => {
  const {textStyle1,textStyle2, viewStyle, submitStyle} = styles;

  var emailSubmitHandler = function (e){
    //
    var email = {
      email: e.nativeEvent.text
    }

    fetch("http://localhost:1337/api/signup", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email)
    }).then(function (res){
      return res.json()
    }).then(function(data){
      console.log("Response data: ", data)
    })
  }

  return (
      <View style={viewStyle}>
        <TextInput style={submitStyle}
        onSubmitEditing={emailSubmitHandler}
        autoCorrect={false}
        placeholder="All you need is email"/>
        <Text style={textStyle2}>(Sign up is required.)</Text>
      </View>
    );
};

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
  }
}

// Make componenet available for other parts of the app
export default Auth;
