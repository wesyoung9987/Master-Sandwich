// Import a library to help create a component
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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

      <KeyboardAwareScrollView>
        <View style={{marginLeft: 10, marginRight: 10, marginTop: 20}}>
          <FormView nav={this.props.nav}/>
        </View>
      </KeyboardAwareScrollView>

    );
  }
};

export default CreateAdventure;