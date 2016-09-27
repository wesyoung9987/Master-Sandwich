import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

// App components
import AdvenCard from './AdvenCard'


const AdvenLI = (props) => {

  const advenCardRoute = {
    title: props.adven.name + " Card",
    component: AdvenCard,
    passProps: {
      nav: props.nav,
      adven: props.adven
    }
  }

  var toAdvenCard = function (){
    props.nav.push(advenCardRoute);
    console.log('PROPS.nav: ', props.nav);
    console.log('PROPS: ', props)
  }

  // Optional button depending on how we structure list item
  // <Text onPress={toAdvenCard}>View Card</Text>
  return (
      <TouchableHighlight
      onPress={toAdvenCard}
      underlayColor={'#00ffff'}>
        <View>
          <Text>{props.adven.name}</Text>
          <Text style={{ fontSize: 9 }}>{props.adven.details.location}</Text>
        </View>
      </TouchableHighlight>
    );
};

export default AdvenLI
