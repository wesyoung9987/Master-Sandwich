import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Riddle from './Riddle.js'

const AdventureSolution = (props) => {

  return (
      <View style={{ margin: 70 }}>
        <Riddle num={1} nav={props.nav} loc={props.myAdventure.adventureId.startingLocation} riddle={props.myAdventure.adventureId.adventure[0].riddle}></Riddle>
        <Riddle num={2} nav={props.nav} loc={props.myAdventure.adventureId.startingLocation} riddle={props.myAdventure.adventureId.adventure[1].riddle}></Riddle>
        <Riddle num={3} nav={props.nav} loc={props.myAdventure.adventureId.startingLocation} riddle={props.myAdventure.adventureId.adventure[2].riddle}></Riddle>
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
