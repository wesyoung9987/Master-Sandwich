import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native'

// App components
import AllAdventureLI from './AllAdventureLI'

export default class AllAdvens extends Component {
  constructor(props){
    super(props)
  }


  renderRowCB(advens){
    return advens.map(adven => {
      return <AllAdventureLI nav={this.props.nav} adven={adven}/>
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderRowCB(this.props.advens)}
      </ScrollView>
    );
  }
}
