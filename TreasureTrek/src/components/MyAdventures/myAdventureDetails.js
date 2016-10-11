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

  var averageStars = function() {

    //Get number of review categories (1 Star, 2 Star, etc.)
    //that actually have reviews in them
    var numStarCategories = 0;
    if (props.myAdventure.adventureId.stars.oneStar > 0) numStarCategories++;
    if (props.myAdventure.adventureId.stars.twoStar > 0) numStarCategories++;
    if (props.myAdventure.adventureId.stars.threeStar > 0) numStarCategories++;
    if (props.myAdventure.adventureId.stars.fourStar > 0) numStarCategories++;
    if (props.myAdventure.adventureId.stars.fiveStar > 0) numStarCategories++;

    //Calculate average number of stars
    var avg = numStarCategories ?  Math.floor(((1 * props.myAdventure.adventureId.stars.oneStar + 2 * props.myAdventure.adventureId.stars.twoStar + 3*  props.myAdventure.adventureId.stars.threeStar + 4 * props.myAdventure.adventureId.stars.fourStar + 5 * props.myAdventure.adventureId.stars.fiveStar) / numStarCategories)) : 0 ;

    var totalReviews = props.myAdventure.adventureId.stars.oneStar + props.myAdventure.adventureId.stars.twoStar + props.myAdventure.adventureId.stars.threeStar + props.myAdventure.adventureId.stars.fourStar + props.myAdventure.adventureId.stars.fiveStar;


    if (avg === 5) {
      return(
        <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Text style={styles.totalReviewsStyle}> {totalReviews} reviews</Text>
        </View>
      );
    } else if (avg === 4) {
      return(
        <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Text style={styles.totalReviewsStyle}> {totalReviews} reviews</Text>
        </View>
      );
    } else if (avg === 3) {
      return(
        <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Text style={styles.totalReviewsStyle}> {totalReviews} reviews</Text>
        </View>
      );
    } else if (avg === 2) {
      return(
        <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Text style={styles.totalReviewsStyle}> {totalReviews} reviews</Text>
        </View>
      );
    } else if (avg === 1) {
      return(
        <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/select_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Text style={styles.totalReviewsStyle}> {totalReviews} reviews</Text>
        </View>
      );
    } else if (avg === 0) {
      return(
        <View style={styles.viewStyle}>
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Image style={styles.arrowsStyle} source={require('../../resources/unselect_star.png')} />
              <Text style={styles.totalReviewsStyle}> {totalReviews} reviews</Text>
        </View>
      );
    }
  }

  return (
    <View>
      <TouchableHighlight
        onPress={toAdventureSolution}
        underlayColor={'#00ffff'}>
        <View style={styles.viewStyleList}>
          <View style={styles.detailsStyle}>
            <Text style={styles.titleStyle}>{props.myAdventure.adventureId.title}</Text>
            <Text style={{fontSize: 9}}>{props.myAdventure.adventureId.startingLocation}</Text>


            {averageStars()}





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
  viewStyleList:{
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    justifyContent: 'space-between' // added justify
  },
  viewStyle: {
    flexDirection: 'row',
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
