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

  const { itemContainer, viewStyle, detailsStyle, arrowsStyle, titleStyle, arrowsContainer } = styles;
  var photo = props.photo ? {uri: props.photo} : require('../../resources/placeholder.png')

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
      underlayColor={'#00ffff'}>
        <View style={viewStyle}>
          <View style={detailsStyle}>
            <Text style={titleStyle} onPress={toAllAdventureDetail}>{props.adven.title}</Text>
            <Text style={{ fontSize: 9, color: 'white' }}>{props.adven.startingLocation}</Text>
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
    // resizeMode: 'cover',
    // backgroundColor: 'transparent'
    // alignItems: 'flex-end'
    // width: 400
  },
  viewStyle: {
    flexDirection: 'row',
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
    fontSize: 14,
    color: 'white'
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
