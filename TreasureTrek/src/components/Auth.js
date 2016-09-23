// Import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';


// Make Component
const Auth = (props) => {
  const {textStyle1,textStyle2, viewStyle} = styles;

  return (
      <View style={viewStyle}>
        <Text style={textStyle1}>{props.authText}</Text>
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
  }
}

// Make componenet available for other parts of the app
export default Auth;