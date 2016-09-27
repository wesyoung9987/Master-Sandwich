import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

// App components
import MyAdventureDetails from './myAdventureDetails.js'

var dummy = [
  {
    adven_id: "1",
    name: "Where'd sparkles go?",
    details: {
      location: "New York, NY",
      riddle1: "What's brown and black and looks like a cat?",
      location1: "Brooklyn Bridge",
      riddle2: "What's cool in the summer and hot in the winter?",
      location2: "41st Ave. and 3rd St.",
      riddle3: "Where's clever and ever with a beaver heater?",
      location3: "9th St. and 92nd Ave."
    }
  },
  {
    adven_id: "2",
    name: "Buried Treasure",
    details: {
      location: "Seattle, WA",
      riddle1: "What's brown and black and looks like a cat?",
      location1: "Brooklyn Bridge",
      riddle2: "What's cool in the summer and hot in the winter?",
      location2: "41st Ave. and 3rd St.",
      riddle3: "Where's clever and ever with a beaver heater?",
      location3: "9th St. and 92nd Ave."
    }
  },
  {
    adven_id: "3",
    name: "Catch me if you can!",
    details: {
      location: "Austin, TX",
      riddle1: "What's brown and black and looks like a cat?",
      location1: "Brooklyn Bridge",
      riddle2: "What's cool in the summer and hot in the winter?",
      location2: "41st Ave. and 3rd St.",
      riddle3: "Where's clever and ever with a beaver heater?",
      location3: "9th St. and 92nd Ave."
    }
  }
];

var _dummy = ['one', 'two', 'three', 'four']

export default class myAdventuresList extends Component {
  constructor(props){
    super(props)
    this.renderRowCB = this.renderRowCB.bind(this)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows(dummy)
    }
  }

  renderRowCB(myAdventure){
    console.log('this.props.nav: ', this.props.nav)
    return <MyAdventureDetails nav={this.props.nav.navigator} myAdventure={myAdventure}/>
  }

  render() {
    return (
      <View>
        <ListView
          style={styles.listStyle}
          automaticallyAdjustContentInsets={false}
          property={"from list view"}
          dataSource={this.state.data}
          renderRow={this.renderRowCB}
        />
      </View>
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