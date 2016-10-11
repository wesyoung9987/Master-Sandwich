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

  var photo = {
    uri: props.myAdventure.adventureId.photo || "https://thenypost.files.wordpress.com/2015/08/spongebob-e1441057213584.jpg"
  }

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
              {averageStars()}
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
