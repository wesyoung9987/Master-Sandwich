import React from 'react';
import {
  Text,
  View,
  Linking
} from 'react-native';

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
    // shadowColor: '#000',
    // shadowOffset: { width:0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ed1558',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.3
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    color: '#ed1558'
  }
};

export default SubmitButton;