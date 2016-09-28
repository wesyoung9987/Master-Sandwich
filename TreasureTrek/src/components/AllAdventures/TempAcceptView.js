import React from 'react';
import {Text, View} from 'react-native';

const TempAcceptView = (props) => {
  return (
      <View style={{ margin: 70 }}>
        <Text>You Accepted {props.adven.name}</Text>
      </View>
    );
};


export default TempAcceptView
