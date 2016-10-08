import React from 'react';
import {Text, View, ScrollView, TouchableHighlight, Image, Linking} from 'react-native';
import AdventureSolution from '../MyAdventures/AdventureSolution.js';

const Reviews = (props) => {

  const myAdventureRoute = {
    name: "Riddle List",
    component: AdventureSolution,
    passProps: {
      nav: props.nav,
      myAdventure: props.myAdventure
    }
  };

  var toAdventureSolution = function() {
    props.nav.toRoute(myAdventureRoute);
  }

  return (
    <View>
      <TouchableHighlight
        onPress={toAdventureSolution}
        underlayColor={'#00ffff'}>
        <View>

          <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({/*props.stars.fiveStar*/})</Text>
            </View>
          </View>

          <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({/*props.stars.fourStar*/})</Text>
            </View>
          </View>

            <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({/*props.stars.threeStar*/})</Text>
            </View>
          </View>

          <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({/*props.stars.twoStar*/})</Text>
            </View>
          </View>

          <View style={styles.viewStyle}>
            <View style={styles.arrowsContainer}>
              <Image style={styles.arrowsStyle} source={require('../../resources/star.png')} />
            </View>
            <View style={styles.detailsStyle}>
              <Text style={styles.titleStyle}>({/*props.stars.oneStar*/})</Text>
            </View>
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
    padding: 10
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 12,
    width: 50
  },
  titleStyle: {
    //color: 'white',
    fontSize: 14,
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

export default Reviews;
