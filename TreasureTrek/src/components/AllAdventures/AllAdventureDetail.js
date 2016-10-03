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

export default class AllAdventureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddles: props.adven,
      id: props.adven._id,
      mapview: false
    };
  }

  advenAccept(){
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

  showList() {
    return this.props.adven.adventure.map((riddle, index) => {
      console.log("All Adventure Riddle List: ", riddle)
      var riddleNum = index+1
      return (
        <View key={riddleNum}>
          <Text style={{ fontSize: 14 }}>{riddleNum} : {riddle.riddle}</Text>
          <Text style={{ fontSize: 9 }}>{riddle.location}</Text>
        </View>
      );
    })
  }

  // <Text>Opening Riddle: {props.adven.adventure[0].riddle}</Text>
  // <Text>Starting Location: {props.adven.adventure[0].location}</Text>
  render(){
    console.log("Props from All Adven Detail: ", this.props)
    return (
      <View>
        <MapScreen riddles={this.props.adven.adventure}/>
        <ScrollView>
        {this.showList()}
          <View style={style.buttonContainer}>
            <TouchableHighlight style={style.button} onPress={this.advenAccept}>
              <Text style={style.text}>Accept</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
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
