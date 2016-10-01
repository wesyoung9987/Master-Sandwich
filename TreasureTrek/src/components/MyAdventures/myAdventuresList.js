import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

// App components
import MyAdventureDetails from './myAdventureDetails.js'


export default class myAdventuresList extends Component {
  constructor(props){
    super(props)
  }

  renderRowCB(myAdventures){
    return myAdventures.map(myAdventure => {
      return <View style={{flex:1}} key={myAdventure._id}><MyAdventureDetails nav={this.props.nav} myAdventure={myAdventure}/></View>
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderRowCB(this.props.adventures)}
      </ScrollView>
    );
  }
}

