// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import FormView from './formView';

// Create a component
class CreateAdventure extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: ''
    }
  }

  //state = {input1: ''};

  render() {
    return (
      <ScrollView>
        <View style={{marginLeft: 10, marginRight: 10, marginTop: 20}}>
          <FormView nav={this.props.nav}/>
        </View>
      </ScrollView>
    );
  }
};

export default CreateAdventure;