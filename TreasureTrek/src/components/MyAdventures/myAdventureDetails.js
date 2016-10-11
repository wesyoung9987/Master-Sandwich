import React from 'react';
import {Text, View, TouchableHighlight, Image, Linking} from 'react-native';
import AdventureSolution from './AdventureSolution.js';
import AverageReviews from '../Reviews/AverageReviews.js';

const MyAdventureDetails = (props) => {

  const myAdventureRoute = {
    name: "Riddle List",
    component: AdventureSolution,
    passProps: {
      nav: props.nav,
      myAdventure: props.myAdventure
    }
  };

  var photo = {
    uri: props.myAdventure.adventureId.photo || "https://thenypost.files.wordpress.com/2015/08/spongebob-e1441057213584.jpg"
  }

  var toAdventureSolution = function() {
    console.log('props: ', props)
    props.nav.toRoute(myAdventureRoute);
  }



  return (
    <View style={styles.itemContainer}>

      <View style={{flex: 1, position: 'absolute', top: 0, bottom: 0,left: 0,right: 0}}>
        <Image
          style={{flex: 1, resizeMode: 'cover', height: null, width: null}}
          source={photo} />
      </View>

      <View style={styles.touchContainer}>
        <TouchableHighlight
          onPress={toAdventureSolution}
          underlayColor={'#00ffff'}>
          <View style={styles.viewStyle}>
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>{props.myAdventure.adventureId.title}</Text>
              <Text style={styles.locationStyle}>{props.myAdventure.adventureId.startingLocation}</Text>
              <AverageReviews myAdventure={props.myAdventure}/>
            </View>
            <View style={styles.arrowsContainer}>
              <Image style={styles.arrowsStyle} source={require('../../resources/red-arrow.png')} />
            </View>
          </View>
        </TouchableHighlight>
      </View>

    </View>

  );
};

var styles = {
  itemContainer: {
    height: 200,
    flex: 1,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 2,
    marginRight: 2
  },
  touchContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  viewStyle: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    justifyContent: 'space-between', // added justify
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  viewStyle: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between' // added justify
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  locationStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  totalReviewsStyle: {
    fontSize: 14,
    marginLeft: 20
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
