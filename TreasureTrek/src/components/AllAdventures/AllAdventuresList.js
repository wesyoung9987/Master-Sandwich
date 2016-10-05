import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  ListView,
  TextInput,
  Text,
  View
} from 'react-native'

// App components
import AllAdventureLI from './AllAdventureLI'

export default class AllAdvens extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ""
    }
  }

  filter(e){
    this.setState({
      query: e.nativeEvent.text,
    })
  }

  renderRowCB(advens){
    return advens.map(adven => {
      return <AllAdventureLI key={adven._id} nav={this.props.nav} adven={adven}/>
    })
  }

  render() {
    var filtered = this.props.advens.filter(adventure => {
        return adventure.title
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
