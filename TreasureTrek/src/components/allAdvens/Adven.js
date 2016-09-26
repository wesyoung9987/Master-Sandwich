import React from 'react';
import {Text, View} from 'react-native';


// Make Component
const Header = (props) => {
  const {textStyle, viewStyle} = styles;

  return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.name}</Text>
      </View>
    );
};
