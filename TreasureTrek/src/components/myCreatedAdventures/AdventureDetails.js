import React from 'react';
import { Text, View, Image, Linking, TouchableHighlight } from 'react-native';


const AdventureDetail = ({ singleAdventure }) => {
  const { id, title, creator, adventure, date, completedAll, startingLocation } = singleAdventure;
  const {
    viewStyle, detailsStyle, titleStyle, dateStyle, arrowsStyle, arrowsContainer
  } = styles;

  return (
    <TouchableHighlight onPress={() => {
      return 1;
    }}>
      <View style={viewStyle}>
        <View style={detailsStyle}>
          <Text style={titleStyle}>{title}</Text>
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
    // height: 80,
    // shadowColor: '#000',
    // shadowOffset: { width:0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#24CCFD',
    padding: 10
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 12,
    width: 285
  },
  titleStyle: {
    color: 'white',
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

export default AdventureDetail;