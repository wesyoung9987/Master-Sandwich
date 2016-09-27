import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Riddle from './Riddle.js'

const AdventureSolution = (props) => {

  return (
      <View style={{ margin: 70 }}>
        <Riddle num={1} nav={props.nav} loc={props.myAdventure.details.location1} riddle={props.myAdventure.details.riddle1}></Riddle>
        <Riddle num={2} nav={props.nav} loc={props.myAdventure.details.location2} riddle={props.myAdventure.details.riddle2}></Riddle>
        <Riddle num={3} nav={props.nav} loc={props.myAdventure.details.location3} riddle={props.myAdventure.details.riddle3}></Riddle>
      </View>
    );
};

var style = {
  button: {
    //textAlign: 'center',
    //color: '#ffffff'
  }
}

export default AdventureSolution;
