import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

// App components
import AllAdventureDetail from './AllAdventureDetail'


const AdvenLI = (props) => {

  const advenCardRoute = {
    name: props.adven.name + " Card",
    component: AllAdventureDetail,
    passProps: {
      //nav: props.nav,
      adven: props.adven
    }
  }

  var toAllAdventureDetail = function (){
    props.nav.toRoute(advenCardRoute);
    console.log('PROPS.nav: ', props.nav);
    console.log('PROPS: ', props)
  }

  // Optional button depending on how we structure list item
  // <Text onPress={toAllAdventureDetail}>View Card</Text>
  return (
      <TouchableHighlight
      onPress={toAllAdventureDetail}
      underlayColor={'#00ffff'}>
        <View>
          <Text>{props.adven.name}</Text>
          <Text style={{ fontSize: 9 }}>{props.adven.details.location}</Text>
        </View>
      </TouchableHighlight>
    );
};

export default AdvenLI
