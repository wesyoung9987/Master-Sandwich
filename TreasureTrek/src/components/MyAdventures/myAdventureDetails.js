import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import AdventureSolution from './AdventureSolution.js';


const MyAdventureDetails = (props) => {

  const myAdventureRoute = {
    name: props.myAdventure.name + " Card",
    component: AdventureSolution,
    passProps: {
      nav: props.nav,
      myAdventure: props.myAdventure
    }
  };

  var toAdventureSolution = function() {
    console.log('props: ', props)
    props.nav.toRoute(myAdventureRoute);
  }

  return (
    <TouchableHighlight
      onPress={toAdventureSolution}
      underlayColor={'#00ffff'}>
      <View style={styles.listStyle}>
        <Text style={{fontSize: 12}}>{props.myAdventure.adventureId.title}</Text>
        <Text style={{fontSize: 9}}>{props.myAdventure.adventureId.startingLocation}</Text>
      </View>
    </TouchableHighlight>
  );
};

var styles = {
  listStyle : {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 3},
    //shadowOpacity: 0.3,
    //shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    padding: 10
  }
};

export default MyAdventureDetails;
