import React from 'react';
import {Text, View, TouchableHighlight, Image, Linking} from 'react-native';
import AdventureSolution from './AdventureSolution.js';


const MyAdventureDetails = (props) => {

  const myAdventureRoute = {
    name: "Riddle List",
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
    <View>
      <TouchableHighlight
        onPress={toAdventureSolution}
        underlayColor={'#00ffff'}>
        <View style={styles.viewStyle}>
          <View style={styles.detailsStyle}>
            <Text style={styles.titleStyle}>{props.myAdventure.adventureId.title}</Text>
            <Text style={{fontSize: 9}}>{props.myAdventure.adventureId.startingLocation}</Text>
          </View>
          <View style={styles.arrowsContainer}>
            <Image style={styles.arrowsStyle} source={require('../../resources/red-arrow.png')} />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

var styles = {
  viewStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    justifyContent: 'space-between' // added justify
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
    //marginLeft: 12, // removed margin
    //width: 285  // removed width
  },
  titleStyle: {
    //color: 'white',
    fontSize: 14
    //fontWeight: '600'
  },
  arrowsStyle: {
    height: 25,
    width: 25
  },
  arrowsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default MyAdventureDetails;
