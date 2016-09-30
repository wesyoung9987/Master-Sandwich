import React from 'react';
import {Text, View, TouchableHighlight, ScrollView} from 'react-native';
import Riddle from './Riddle.js'
//import Toggle from 'react-native-toggle';

const AdventureSolution = (props) => {

  return (
      <View style={{ flex: 1, marginTop:75 }}>
        <ScrollView>
          <Text>
          Starting Location: {props.myAdventure.adventureId.startingLocation}</Text>

          <Riddle num={1} completion={props.myAdventure.completion[0]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[0].location} riddle={props.myAdventure.adventureId.adventure[0].riddle} answer={props.myAdventure.adventureId.adventure[0].answer}></Riddle>
          <Riddle num={2} completion={props.myAdventure.completion[1]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[1].location} riddle={props.myAdventure.adventureId.adventure[1].riddle} answer={props.myAdventure.adventureId.adventure[1].answer}></Riddle>
          <Riddle num={3} completion={props.myAdventure.completion[2]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[2].location} riddle={props.myAdventure.adventureId.adventure[2].riddle} answer={props.myAdventure.adventureId.adventure[2].answer}></Riddle>
          <View style={styles.giveup}>
            <TouchableHighlight style={styles.button}  underlayColor='#99d9f4'>
                <Text style={styles.buttonText}> Give Up? </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
};

var styles = {
  giveup: {
    padding: 20,
    margin: 20
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
}

export default AdventureSolution;
