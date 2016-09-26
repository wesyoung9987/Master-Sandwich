import React from 'react';
import {Text, View} from 'react-native';

const AdvenCard = (props) => {
  console.log(props)

  return (
      <View style={{margin: 70}}>
        <Text>{props.adven.name}</Text>
        <Text>{props.adven.text}</Text>
      </View>
    );
};

export default AdvenCard
