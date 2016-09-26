import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

// App components
import Adven from './Adven'

var dummy = ['one', 'two', 'three', 'four'];

export default class AllAdvens extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: ds.cloneWithRows(dummy)
    }
  }

  advensList(advens){
    return <Adven key={}name={advens}/>
  }

  render() {
    return (
      <View>
        <ListView
          style={{margin: 70}}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.data}
          renderRow={this.advensList}
        />
      </View>
    );
  }
}
