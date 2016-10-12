import React from 'react';
import {Text, View, ScrollView, TouchableHighlight, Image, Linking} from 'react-native';

const AverageReviews = (props) => {

  //Get number of review categories (1 Star, 2 Star, etc.)
  //that actually have reviews in them
  var numStarCategories = 0;
  if (props.myAdventure.adventureId.stars.oneStar > 0) numStarCategories++;
  if (props.myAdventure.adventureId.stars.twoStar > 0) numStarCategories++;
  if (props.myAdventure.adventureId.stars.threeStar > 0) numStarCategories++;
  if (props.myAdventure.adventureId.stars.fourStar > 0) numStarCategories++;
  if (props.myAdventure.adventureId.stars.fiveStar > 0) numStarCategories++;

  //Calculate total number of reviews for this adventure
  var totalReviews = props.myAdventure.adventureId.stars.oneStar + props.myAdventure.adventureId.stars.twoStar + props.myAdventure.adventureId.stars.threeStar + props.myAdventure.adventureId.stars.fourStar + props.myAdventure.adventureId.stars.fiveStar;

   //Calculate average number of stars
  var avg = numStarCategories ?  Math.floor(((1 * props.myAdventure.adventureId.stars.oneStar + 2 * props.myAdventure.adventureId.stars.twoStar + 3*  props.myAdventure.adventureId.stars.threeStar + 4 * props.myAdventure.adventureId.stars.fourStar + 5 * props.myAdventure.adventureId.stars.fiveStar) / totalReviews)) : 0 ;


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
  } else {
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
    marginLeft: 20,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
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

export default AverageReviews;
