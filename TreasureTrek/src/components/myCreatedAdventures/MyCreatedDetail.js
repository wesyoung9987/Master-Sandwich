import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
  ScrollView
} from 'react-native';

// App components
import MenuButton from '../nav/MenuButton';
import MyAdventures from '../MyAdventures/myAdventuresContainer';
import MapScreen from './MapScreen'

var AllAdventureDetail = function (props) {

  var showList = function() {
    return props.adven.adventure.map((riddle, index) => {
      var riddleNum = index+1
      return (
        <View key={riddleNum} style={style.listStyle}>
          <Text style={{ fontSize: 14 }}>{riddleNum} : {riddle.riddle}</Text>
          <Text style={style.loc}>{"Answer: "+riddle.answer}</Text>
        </View>
      );
    })
  }

  return (
    <View style={{flex: 1, marginTop:5, flexDirection: 'column', justifyContent: 'space-between'}}>

      <View style={style.map}>
        <MapScreen riddles={props.adven.adventure}/>
      </View>

      <View style={{flex: 2}}>
        <ScrollView>
          {showList()}
        </ScrollView>
      </View>

    </View>
  );

};

var style = {
  map: {
    margin: 5, // changed from 5
    // alignItems: 'center'
    position: 'relative',
    flex: 3
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 20,
    padding: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  // imported from MyAdventuresDetail
  // **USING**
  listStyle : {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    padding: 5,
  },
  // **USING**
  loc : {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'gray'
  },
  title: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold',
    elevation: 1,
    flexDirection: 'column'
  }
}

export default AllAdventureDetail
