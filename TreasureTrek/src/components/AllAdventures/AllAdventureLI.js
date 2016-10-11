import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

// App components
import AllAdventureDetail from './AllAdventureDetail'


const AdvenLI = (props) => {
  const { itemContainer, viewStyle, detailsStyle, arrowsStyle, titleStyle, arrowsContainer, locationStyle, imageStyle } = styles;
  var photo = {
    uri: props.adven.photo !==
      "../../TreasureTrek/src/resources/placeholder.png" ?
      props.adven.photo :
      "https://thenypost.files.wordpress.com/2015/08/spongebob-e1441057213584.jpg?quality=90&strip=all&w=664&h=441&crop=1"
  }

  const advenCardRoute = {
    name: props.adven.title,
    component: AllAdventureDetail,
    passProps: {
      adven: props.adven
    }
  }

  var toAllAdventureDetail = function (){
    props.nav.toRoute(advenCardRoute);
  }

  return (
    <Image
      style={itemContainer}
      source={photo}>
      <TouchableHighlight
      onPress={toAllAdventureDetail}
      underlayColor={'#00ffff'}
      style={{
        justifyContent: 'flex-end',
        marginBottom: 10
      }}>
        <View style={viewStyle}>
          <View style={detailsStyle}>
            <Text style={titleStyle} onPress={toAllAdventureDetail}>{props.adven.title}</Text>
            <Text style={locationStyle}>{props.adven.startingLocation}</Text>
          </View>
          <View style={arrowsContainer}>
            <Image style={arrowsStyle} source={require('../../resources/red-arrow.png')} />
          </View>
        </View>
      </TouchableHighlight>
    </Image>
    );
};


const styles = {
  itemContainer: {
    height: 200,
    flex: 1,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 2,
    marginRight: 2,
    flexDirection: 'column',
    // borderColor: 'white'
    // resizeMode: 'cover',
    // backgroundColor: 'transparent'
    // alignItems: 'flex-end'
    // width: 400
  },
  // imageStyle: {
  //   resizeMode: 'cover',
  //   flex: 3
  // },
  viewStyle: {
    flexDirection: 'row',
    flex: 3,
    // borderWidth: 1,
    // borderColor: '#ddd',
    padding: 10,
    flex: 1,
    justifyContent: 'space-between' // added justify
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    // marginLeft: 12, // removed
    // width: 285  // removed
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
  arrowsStyle: {
    height: 25,
    width: 25,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  arrowsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default AdvenLI
