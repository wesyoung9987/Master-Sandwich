import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Riddle from './Riddle.js'

const AdventureSolution = (props) => {

  // var routeAcceptView = {
  //   title: "You accepted " + props.myAdventure.name,
  //   component: TempAcceptView,
  //   passProps: {
  //     myAdventure: props.myAdventure
  //   }
  // }

  // var toAcceptView = function (){
  //   props.nav.push(routeAcceptView)
  // }

  return (
      <View style={{ margin: 70 }}>
        <Riddle num={1} loc={props.myAdventure.details.location1} riddle={props.myAdventure.details.riddle1}></Riddle>
        <Riddle num={2} loc={props.myAdventure.details.location2} riddle={props.myAdventure.details.riddle2}></Riddle>
        <Riddle num={3} loc={props.myAdventure.details.location3} riddle={props.myAdventure.details.riddle3}></Riddle>
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
