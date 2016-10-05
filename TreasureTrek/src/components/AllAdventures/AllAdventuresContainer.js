import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
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

  getAllAds(){
    var self = this
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
    console.log("Containter All Adventures: ", this.state.adventures)
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
