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

  const advenCardRoute = {
    name: props.adven.title + " Card",
    component: AllAdventureDetail,
    passProps: {
      adven: props.adven
    }
  }

  const { viewStyle, detailsStyle, arrowsStyle, titleStyle, arrowsContainer } = styles;

  var toAllAdventureDetail = function (){
    props.nav.toRoute(advenCardRoute);
  }

  return (
    <TouchableHighlight
    onPress={toAllAdventureDetail}
    underlayColor={'#00ffff'}>
        <View style={viewStyle}>
          <View style={detailsStyle}>
            <Text style={titleStyle}>{props.adven.title}</Text>
            <Text style={{ fontSize: 9 }}>{props.adven.startingLocation}</Text>
          </View>
          <View style={arrowsContainer}>
            <Image style={arrowsStyle} source={require('../../resources/double-arrows.png')} />
          </View>
        </View>
      </TouchableHighlight>
    );
};


const styles = {
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
    fontSize: 14,
    fontWeight: '600'
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

export default AdvenLI
