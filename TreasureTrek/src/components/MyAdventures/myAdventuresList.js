import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  ListView,
  Text,
  TextInput,
  View
} from 'react-native'

// App components
import MyAdventureDetails from './myAdventureDetails.js'


export default class myAdventuresList extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }

  filter(e){
    this.setState({
      query: e.nativeEvent.text,
    })
  }

  renderRowCB(myAdventures){
    return myAdventures.map(myAdventure => {
      return <View style={{flex:1}} key={myAdventure._id}><MyAdventureDetails nav={this.props.nav} myAdventure={myAdventure}/></View>
    })
  }

  render() {

    var filtered = this.props.adventures.filter(adventure => {
      return adventure.adventureId.title
        .toLowerCase()
        .indexOf(this.state.query.toLowerCase()) !== -1
    })

    return (
      <View>
        <TextInput
          value={this.state.query}
          style={{ height: 20, margin: 10, borderColor: 'gray' }}
          placeholder={"Search"}
          onChange={this.filter.bind(this)}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <ScrollView>
          {this.renderRowCB(filtered)}
        </ScrollView>
      </View>
    );
  }
}

