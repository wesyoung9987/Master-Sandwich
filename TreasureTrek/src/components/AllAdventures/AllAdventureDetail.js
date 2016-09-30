import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

// App components
import MenuButton from '../nav/MenuButton';
import MyAdventures from '../MyAdventures/myAdventuresContainer';

const AllAdventureDetail = (props) => {

  var advenAccept = function (){
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
            leftCorner: MenuButton,
            name: "My Adventures"
          })
        })
        .catch(err => {
          console.error("failed to send adventure accept: ", err)
        })
      })
  }

  return (
      <View>
        <View style={style.card}>
          <Text>Opening Riddle: {props.adven.adventure[0].riddle}</Text>
          <Text>Starting Location: {props.adven.adventure[0].location}</Text>
        </View>
        <TouchableHighlight style={style.button} onPress={advenAccept}>
          <Text style={style.text}>Accept</Text>
        </TouchableHighlight>
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
    margin: 5,
    // alignSelf: 'stretch',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
}

export default AllAdventureDetail
