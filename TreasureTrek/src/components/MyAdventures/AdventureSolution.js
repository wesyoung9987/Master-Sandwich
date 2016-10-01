import React, { Component } from 'react';
import {AsyncStorage, AlertIOS, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import Riddle from './Riddle.js'
import MyAdventures from './myAdventuresContainer'
import MenuButton from '../nav/MenuButton';
import MapScreen from './MapScreen';


class AdventureSolution extends Component {

  constructor(props) {
    super(props);
    this.state = {
      riddles: props.myAdventure.adventureId.adventure,
      completion: props.myAdventure.completion,
      id: props.myAdventure.adventureId._id,
      startingLocation: props.myAdventure.adventureId.startingLocation,
      mapview: false,
      toggletext: "To Map"
    };
  }

  deleteAdventure () {
    AsyncStorage.getItem('id_token')
    .then(token=>{
      fetch("https://treasure-trek.herokuapp.com/api/forgetAd",{
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify({adventureid: this.props.myAdventure.adventureId._id})
      }).then(function(res){
        return res.json()
      }).then((data)=>{
        console.log('Deleted! Data Response: ', data);
        AlertIOS.alert('Adventure Deleted');
        this.props.nav.resetToRoute({
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

  handleError () {
    AsyncStorage.removeItem('id_token')
      .then(()=>{
        errorRedirectToLogin("No Session - Redirecting");
      }).catch(error => {
        console.log('AsyncStorage error: ' + error.message);
        errorRedirectToLogin("Internal Error - Redirecting")
      });
  }

  errorRedirectToLogin (message) {
    AlertIOS.alert(message);
    this.props.nav.resetToRoute({
      name: "Login",
      component: Auth
    });
  }

  showList () {
    return (
      <ScrollView>
        <Text>
          Starting Location: {this.state.startingLocation}
        </Text>
        {this.state.riddles.map((riddle, index) => {
          return (<Riddle num={index+1} key={index.toString()} completion={this.state.completion[index]} id={this.state.id} nav={this.props.nav} loc={riddle.location} riddle={riddle.riddle} answer={riddle.answer} />);
        })}
        <View style={styles.giveup}>
          <TouchableHighlight style={styles.button} onPress={this.deleteAdventure.bind(this)}  underlayColor='#00ffff'>
              <Text  style={styles.buttonText}> Give Up? </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }

  showMap () {
    return (
      <MapScreen riddles={this.state.riddles}/>
    );
  }

  toggleMap () {
    if (this.state.mapview) {
      this.setState({
        mapview: !this.state.mapview,
        toggletext: 'To Map'
      });
    } else {
      this.setState({
        mapview: !this.state.mapview,
        toggletext: 'To List'
      });
    }
  }

  render () {
    return (
      <View style={{ flex: 1, marginTop:5 }}>
        <View style={{marginLeft: 100, marginRight: 100}}>
          <TouchableHighlight style={styles.button} onPress={this.toggleMap.bind(this)}>
            <Text style={styles.buttonText}>{this.state.toggletext}</Text>
          </TouchableHighlight>
        </View>
        {this.state.mapview ? this.showMap() : this.showList()}
      </View>
    );
  }

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

/* Previous List Components (for reference):
<Riddle num={1} completion={props.myAdventure.completion[0]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[0].location} riddle={props.myAdventure.adventureId.adventure[0].riddle} answer={props.myAdventure.adventureId.adventure[0].answer}></Riddle>
<Riddle num={2} completion={props.myAdventure.completion[1]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[1].location} riddle={props.myAdventure.adventureId.adventure[1].riddle} answer={props.myAdventure.adventureId.adventure[1].answer}></Riddle>
<Riddle num={3} completion={props.myAdventure.completion[2]} id={props.myAdventure.adventureId._id} nav={props.nav} loc={props.myAdventure.adventureId.adventure[2].location} riddle={props.myAdventure.adventureId.adventure[2].riddle} answer={props.myAdventure.adventureId.adventure[2].answer}></Riddle>
*/

export default AdventureSolution;
