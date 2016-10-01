import React from 'react';
import {AsyncStorage, AlertIOS, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import Riddle from './Riddle.js'
import MyAdventures from './myAdventuresContainer'
import MenuButton from '../nav/MenuButton';


const AdventureSolution = (props) => {

  const deleteAdventure = function() {
  AsyncStorage.getItem('id_token')
    .then(token=>{
      fetch("https://treasure-trek.herokuapp.com/api/forgetAd",{
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify({adventureid: props.myAdventure.adventureId._id})
      }).then(function(res){
        return res.json()
      }).then((data)=>{
        console.log('Deleted! Data Response: ', data);
        AlertIOS.alert('Adventure Deleted');
        props.nav.resetToRoute({
            name: "My Adventures",
            component: MyAdventures,
            leftCorner: MenuButton,
            name: "My Adventures"
          });
      }).catch((error) => {
        console.log('Delete ERROR: ', error);
        handleError();
      }).done();
    });
}

  const handleError = function() {
    AsyncStorage.removeItem('id_token')
      .then(()=>{
        errorRedirectToLogin("No Session - Redirecting");
      }).catch(error => {
        console.log('AsyncStorage error: ' + error.message);
        errorRedirectToLogin("Internal Error - Redirecting")
      });
  }

 const errorRedirectToLogin = function(message) {
    AlertIOS.alert(message);
    props.nav.resetToRoute({
      name: "Login",
      component: Auth
    });
  }

  return (
      <View style={{ flex: 1, marginTop:75 }}>
        <ScrollView>
          <Text>
          Starting Location: {props.myAdventure.adventureId.startingLocation}</Text>

          <Riddle num={1} completion={props.myAdventure.completion[0]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[0].location} riddle={props.myAdventure.adventureId.adventure[0].riddle} answer={props.myAdventure.adventureId.adventure[0].answer}></Riddle>
          <Riddle num={2} completion={props.myAdventure.completion[1]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[1].location} riddle={props.myAdventure.adventureId.adventure[1].riddle} answer={props.myAdventure.adventureId.adventure[1].answer}></Riddle>
          <Riddle num={3} completion={props.myAdventure.completion[2]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[2].location} riddle={props.myAdventure.adventureId.adventure[2].riddle} answer={props.myAdventure.adventureId.adventure[2].answer}></Riddle>
          <View style={styles.giveup}>
            <TouchableHighlight style={styles.button} onPress={deleteAdventure}  underlayColor='#00ffff'>
                <Text  style={styles.buttonText}> Give Up? </Text>
            </TouchableHighlight>
          </View>

        </ScrollView>

      </View>
    );
};

var styles = {
  giveup: {
    padding: 20,
    margin: 20
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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
}

export default AdventureSolution;
