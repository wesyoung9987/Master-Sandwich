import React from 'react';
import {
  Text,
  View,
  Linking
} from 'react-native';

const AdventureSubmited = () => {
  const {
    viewStyle, titleStyle
  } = styles;

  return (
    <View style={viewStyle}>

        <Text style={titleStyle}>ADVENTURE SUBMITED!</Text>

    </View>
  );
};

const styles = {
  viewStyle: {
    marginTop: 20,
    height: 80,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    color: '#7AAE62',
    fontSize: 20,
    fontWeight: '600',
  }
};

export default AdventureSubmited;