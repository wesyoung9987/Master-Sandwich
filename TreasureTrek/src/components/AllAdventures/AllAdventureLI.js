import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

// App components
import AllAdventureDetail from './AllAdventureDetail';
import AverageReviews from '../Reviews/AverageReviews.js';


const AdvenLI = (props) => {

  const {
    touchContainer,
    itemContainer,
    imageContainer,
    image,
    viewStyle,
    detailsStyle,
    arrowsStyle,
    titleStyle,
    arrowsContainer,
    locationStyle,
    imageStyle } = styles;

  // sets default for description photo
  var photo = {
    uri: props.adven.photo || "https://thenypost.files.wordpress.com/2015/08/spongebob-e1441057213584.jpg"
  }

  // routing object
  const advenCardRoute = {
    name: props.adven.title,
    component: AllAdventureDetail,
    passProps: {
      adven: props.adven
    }
  }

  // routing handler
  var toAllAdventureDetail = function (){
    props.nav.toRoute(advenCardRoute);
  }

  // total layout for list item
  return (
    <View style={itemContainer}>
      <View style={imageContainer}>
        <Image
          style={image}
          source={photo} />
      </View>
      <View style={touchContainer}>
        <TouchableHighlight
        onPress={toAllAdventureDetail}
        underlayColor={'#00ffff'}>
          <View style={viewStyle}>
            <View style={detailsStyle}>
              <Text style={titleStyle} onPress={toAllAdventureDetail}>{props.adven.title}</Text>
              <Text style={locationStyle}>{props.adven.startingLocation}</Text>
               <AverageReviews adventureId={props.adven}/>
            </View>
            <View style={arrowsContainer}>
              <Image style={arrowsStyle} source={require('../../resources/red-arrow.png')} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    );
};


const styles = {
  itemContainer: {
    height: 200,
    flex: 1,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 2,
    marginRight: 2
  },
  imageContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: null,
    width: null
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
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'gray',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 }
  },
  locationStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'gray',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 }
  },
  arrowsStyle: {
    height: 25,
    width: 25,
  },
  arrowsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default AdvenLI
