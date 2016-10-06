import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


const ScoreLI = (props) => {

  const { viewStyle, detailsStyle, arrowsStyle, titleStyle, arrowsContainer } = styles;

  return (
    <TouchableHighlight
    underlayColor={'#00ffff'}>
      <View style={viewStyle}>
         <View style={arrowsContainer}>
          <Image style={arrowsStyle} source={require('../../resources/user-placeholder.png')} />
        </View>
        <View style={detailsStyle}>
          <Text style={titleStyle}>{props.score.username}</Text>
          <Text style={{ fontSize: 15 }}>Level {props.score.level}</Text>
        </View>
        <View style={detailsStyle}>
          <Text style={titleStyle}>{props.score.points}</Text>
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
    //justifyContent: 'space-around',
    marginLeft: 5,
    width: 245
  },
  titleStyle: {
    fontSize: 24,
    color: '#ed1558'
  },
  arrowsStyle: {
    height: 35,
    width: 35
  },
  arrowsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default ScoreLI;
