import React, { Component } from 'react';
import {AsyncStorage, AlertIOS, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import Riddle from './Riddle.js'
import MyAdventures from './myAdventuresContainer'
import MenuButton from '../nav/MenuButton';
import MapScreen from './MapScreen';
import Reviews from '../Reviews/Reviews.js';


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

  updateCompletion (index) {
    var newArray = this.state.completion;
    newArray[index] = true;
    this.setState({
      completion: newArray
    });
  }

  showList () {
    return (
      <ScrollView >
        {this.state.riddles.map((riddle, index) => {
          return (<Riddle num={index+1} key={index.toString()} completion={this.state.completion[index]} id={this.state.id} nav={this.props.nav} loc={riddle.location} riddle={riddle.riddle} answer={riddle.answer} updateCompletion={this.updateCompletion.bind(this, index)}/>);
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
      <MapScreen riddles={this.state.riddles} />
    );
  }

  showReviews () {
    return (
      <ScrollView><Reviews nav={this.props.nav} myAdventure={this.props.myAdventure} stars={this.props.myAdventure.adventureId.stars}/></ScrollView>
    );
  }

  render () {
    return (
      <View style={{ flex: 1, marginTop:5, flexDirection: 'column', justifyContent: 'space-between'}}>
        <View style={styles.map}>
          {this.showMap()}
        </View>
        <View>
        {this.showReviews()}
        {this.showList()}
        </View>
      </View>
    );
  }

};

var styles = {
  map: {
    margin: 5, // changed from 10
    position: 'relative',
    // borderColor: 'black',
    // borderWidth: 1,
    flex:1
  },
  giveup: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5, // changed from 10
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
