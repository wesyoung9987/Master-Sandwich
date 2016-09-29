import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Riddle from './Riddle.js'
//import Toggle from 'react-native-toggle';

const AdventureSolution = (props) => {

  return (
      <View style={{ margin: 70 }}>
        <Text>Starting Location: {props.myAdventure.adventureId.startingLocation}</Text>
        <Riddle num={1} completion={props.myAdventure.completion[0]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[0].location} riddle={props.myAdventure.adventureId.adventure[0].riddle} answer={props.myAdventure.adventureId.adventure[0].answer}></Riddle>
        <Riddle num={2} completion={props.myAdventure.completion[0]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[1].location} riddle={props.myAdventure.adventureId.adventure[1].riddle} answer={props.myAdventure.adventureId.adventure[0].answer}></Riddle>
        <Riddle num={3} completion={props.myAdventure.completion[0]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[2].location} riddle={props.myAdventure.adventureId.adventure[2].riddle} answer={props.myAdventure.adventureId.adventure[0].answer}></Riddle>
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
