import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage
} from 'react-native';
import AllAdventuresList from './AllAdventuresList.js';

class AllAdventures extends Component {

  constructor(){
    super()
    this.state = {
      fetching: true,
      recieved: false,
      adventures: []
    }
  }

  // API call,  should return array of all adventures not by user and not
  // previously accepted
  getAllAds(){
    var self = this
    // API calls require session token
    AsyncStorage.getItem('id_token')
    .then(function(data){
      fetch("https://treasure-trek.herokuapp.com/api/fetchAll", {
        headers: {
          "x-access-token": data
        }
      })
      .then(res => res.json())
      .then(data => {
        self.setState({
          adventures: data
        })
      }).catch(error => console.log("ERR:", error))
    })
  }

  componentDidMount(){
    this.getAllAds()
  }

  render(){
    return (
      <View style={{ flex: 1}}>
        <AllAdventuresList
          nav={this.props}
          advens={this.state.adventures}/>
      </View>
    );
  }
};

export default AllAdventures
