import React from 'react';
import { Text, View, Linking } from 'react-native';


const SubmitButton = () => {
  const {
    viewStyle, titleStyle
  } = styles;

  return (
    <View style={viewStyle}>

        <Text style={titleStyle}>SUBMIT</Text>

    </View>
  );
};

const styles = {
  viewStyle: {
    marginTop: 20,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#d13539',
    backgroundColor: '#DF7376',
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
  }
};

export default SubmitButton;