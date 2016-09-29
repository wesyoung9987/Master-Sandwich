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
            component: MyAdventures,
            leftCorner: MenuButton
          })
        })
        .catch(err => {
          console.error("failed to send adventure accept: ", err)
        })
      })
  }

  return (
      <View style={{ margin: 70 }}>
        <Text>{props.adven.adventure[0].riddle}</Text>
        <Text>{props.adven.adventure[0].location}</Text>
        <TouchableHighlight style={style.button} onPress={advenAccept}>
          <Text style={style.text}>Accept</Text>
        </TouchableHighlight>
      </View>
    );
};

var style = {
  button: {
    alignItems: 'center'
    // color: '#ffffff'
  },
  text: {
    color: '#0000ff'
  }
}

export default AllAdventureDetail
