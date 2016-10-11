import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


const ScoreLI = (props) => {

  const { viewStyle, detailsStyleL, detailsStyleR, arrowsStyle, titleStyle, pointStyle, arrowsContainer } = styles;

  return (
    <TouchableHighlight
      underlayColor={'#00ffff'}>
      <View style={viewStyle}>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
          <View style={arrowsContainer}>
            <Image style={arrowsStyle} source={props.score.photo!=='../../TreasureTrek/src/resources/placeholder.png' ? {uri: props.score.photo} : require('../../resources/user-placeholder.png')} />
          </View>


          <View style={detailsStyleL}>
            <Text style={titleStyle}>{props.score.username}</Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>{'#'+props.place}</Text>
            <Text style={{ fontSize: 12 }}>{' | Level ' + props.score.level}</Text>
            </View>
          </View>
        </View>

        <View style={detailsStyleR}>
          <Text style={pointStyle}>{props.score.points}</Text>
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
    padding: 5,
    justifyContent: 'space-between'
  },
  detailsStyleL: {
    flexDirection: 'column',
    flex: 1
    //justifyContent: 'space-around',
    // marginLeft: 5,
    // width: 245
  },
  detailsStyleR: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 5
    //justifyContent: 'space-around',
    // marginLeft: 5,
    // width: 245
  },
  titleStyle: {
    fontSize: 20,
    color: '#ed1558',
    alignItems: 'center',
    flex: 1
  },
  pointStyle: {
    fontSize: 20,
    color: '#ed1558',
  },
  arrowsStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  arrowsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5
  }
};

export default ScoreLI;
