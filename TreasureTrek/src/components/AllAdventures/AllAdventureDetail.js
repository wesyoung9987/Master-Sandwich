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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     riddles: props.adven,
  //     id: props.adven._id,
  //     mapview: false
  //   };
  // }

  var advenAccept = function(){
    AsyncStorage.getItem('id_token')
      .then(token => {
        fetch("https://treasure-trek.herokuapp.com/api/pickAd", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "x-access-token": token
          },
          body: JSON.stringify({
            adventureid: props.adven._id
          })
        })
        .then(res => {
          return res.json()
        })
        .then(json => {
          console.log("Successfully sent Adventure accept: ", json)
          props.resetToRoute({
            name: "My Adventures",
            component: MyAdventures,
            leftCorner: MenuButton
          })
        })
        .catch(err => {
          console.error("failed to send adventure accept: ", err)
        })
      })
  }

  var showList = function() {
    return props.adven.adventure.map((riddle, index) => {
      var riddleNum = index+1
      return (
        <View key={riddleNum}>
          <Text style={{ fontSize: 14 }}>{riddleNum} : {riddle.riddle}</Text>
          <Text style={{ fontSize: 9 }}>{riddle.location}</Text>
        </View>
      );
    })
  }


  return (
    <View>
      <MapScreen riddles={props.adven.adventure}/>
      <ScrollView>
      {showList()}
        <View style={style.buttonContainer}>
          <TouchableHighlight style={style.button} onPress={advenAccept}>
            <Text style={style.text}>Accept</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );

};

var style = {
  card: {
    padding: 5,
    margin: 5,
    alignSelf: 'stretch',
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    flex: 1,
    borderColor: 'gray'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20,
    padding: 20
  },
  text: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
}

export default AllAdventureDetail
