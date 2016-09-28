import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
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
        console.log("AllAdventures: ", data)
        self.setState({
          adventures: data
        })
      })
    })
  }

  componentWillMount(){
    this.getAllAds()
  }

  render(){
    return (
      <View>
      <AllAdventuresList nav={this.props} advens={this.state.adventures}></AllAdventuresList>
      </View>
    );
  }
};

export default AllAdventures
