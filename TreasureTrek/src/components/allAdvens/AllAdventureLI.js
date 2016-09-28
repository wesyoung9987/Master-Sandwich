import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

// App components
import AllAdventureDetail from './AllAdventureDetail'


const AdvenLI = (props) => {

  const advenCardRoute = {
    name: props.adven.title + " Card",
    component: AllAdventureDetail,
    passProps: {
      adven: props.adven
    }
  }

  var toAllAdventureDetail = function (){
    props.nav.toRoute(advenCardRoute);
  }

  return (
      <TouchableHighlight
      onPress={toAllAdventureDetail}
      underlayColor={'#00ffff'}>
        <View>
          <Text>{props.adven.title}</Text>
          <Text style={{ fontSize: 9 }}>{props.adven.startingLocation}</Text>
        </View>
      </TouchableHighlight>
    );
};

export default AdvenLI
