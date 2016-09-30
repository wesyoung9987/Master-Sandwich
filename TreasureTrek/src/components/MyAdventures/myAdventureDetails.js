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
    <View style={{flex:1}}>
      <TouchableHighlight
        onPress={toAdventureSolution}
        underlayColor={'#00ffff'}>
        <View style={styles.listStyle}>
          <View>
            <Text style={{fontSize: 12}}>{props.myAdventure.adventureId.title}</Text>
            <Text style={{fontSize: 9}}>{props.myAdventure.adventureId.startingLocation}</Text>
          </View>
        </View>

      </TouchableHighlight>
    </View>
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
    padding: 10,
    flex: 1
  },
  viewStyle: {
    //marginTop: 20,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#7AAE62',
    backgroundColor: '#A0C98E'
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 12,
    width: 285
  },
  titleStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600'
  },
  arrowsStyle: {
    height: 50,
    width: 50
  },
  arrowsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default MyAdventureDetails;
