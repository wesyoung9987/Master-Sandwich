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
    name: props.adven.title,
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
          <Image style={arrowsStyle} source={require('../../resources/red-arrow.png')} />
        </View>
      </View>
    </TouchableHighlight>
    );
};


const styles = {
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
    width: 285
  },
  titleStyle: {
    fontSize: 14,
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
