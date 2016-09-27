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
    adven_id: "1",
    name: "Where'd sparkles go?",
    details: {
      location: "New York, CA",
      OpeningRiddle: "Whatever the opening riddle is"
    }
  },
  {
    adven_id: "2",
    name: "Buried Treasure",
    details: {
      location: "Seattle, WA",
      OpeningRiddle: "Whatever the opening riddle is"
    }
  },
  {
    adven_id: "3",
    name: "Catch me if you can!",
    details: {
      location: "Austin, TX",
      OpeningRiddle: "Whatever the opening riddle is"
    }
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
    console.log('Props.navigator: ', this.props.navigator)
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
