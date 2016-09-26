import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

// App components
import AdvenLI from './AdvenLI'

var dummy = [
  {
    name: "Adventure One",
    text: "We're going on our first adventure"
  },
  {
    name: "Adventure Two",
    text: "We're going on our second adventure"
  },
  {
    name: "Adventure Three",
    text: "We're going on our third adventure"
  }
];

var _dummy = ['one', 'two', 'three', 'four']

export default class AllAdvens extends Component {
  constructor(props){
    super(props)
    this.renderRowCB = this.renderRowCB.bind(this)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows(dummy)
    }
  }

  renderRowCB(adven){
    return <AdvenLI nav={this.props.navigator} adven={adven}/>
  }

  render() {
    return (
      <View>
        <ListView
          style={{margin: 70}}
          automaticallyAdjustContentInsets={false}
          property={"from list view"}
          dataSource={this.state.data}
          renderRow={this.renderRowCB}
        />
      </View>
    );
  }
}
