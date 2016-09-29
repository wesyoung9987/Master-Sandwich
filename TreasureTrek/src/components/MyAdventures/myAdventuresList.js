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
      return <View style={{flex:1}}><MyAdventureDetails nav={this.props.nav} myAdventure={myAdventure}/></View>
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

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 75
  },
  listStyle: {
    margin: 70
  }
};