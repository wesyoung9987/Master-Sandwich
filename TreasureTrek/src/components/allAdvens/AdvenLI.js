import React from 'react';
import {Text, View} from 'react-native';

// App components
import AdvenCard from './AdvenCard'


const AdvenLI = (props) => {

  const advenCardRoute = {
    title: props.adven.name + " Card",
    component: AdvenCard,
    passProps: {
      adven: props.adven
    }
  }

  var toAdvenCard = function (){
    props.nav.push(advenCardRoute)
  }

  // Optional button depending on how we structure list item
  // <Text onPress={toAdvenCard}>View Card</Text>
  return (
      <View>
        <Text onPress={toAdvenCard}>{props.adven.name}</Text>
      </View>
    );
};

export default AdvenLI
