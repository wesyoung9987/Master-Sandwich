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

class AllAdvens extends Component {

  constructor(props){
    super(props)
    this.state = {
      query: ""
    }
  }

  // for search function
  filter(e){
    this.setState({
      query: e.nativeEvent.text,
    })
  }

  // populates ScrollView
  renderRowCB(advens){
    return advens.map(adven => {
      return <AllAdventureLI key={adven._id} nav={this.props.nav} adven={adven}/>
    })
  }

  render() {
    // target for search function
    var filtered = this.props.advens.filter(adventure => {
        return adventure.title
          .toLowerCase()
          .indexOf(this.state.query.toLowerCase()) !== -1
      })
    return (
      <View style={{ flex: 1 }}>
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

export default AllAdvens
