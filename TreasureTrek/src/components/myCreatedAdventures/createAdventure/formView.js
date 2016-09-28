// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import SubmitButton from './SubmitButton';

var val = 0

// Create a component
class FormView extends Component {
  state = {title: '', input1: '', input2: '', input3: '', input4: '', input5: '', input6: '', input7: '', input8: '', input9: '', input10: '', input11: '', input12: ''};

  changeColor(){
    if(val === 0){
      return 'green';
    } else {
      return 'red';
    }
  }

  render() {
    return (

      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15}}
          onFocus={() => function(){ val++; this.changeColor(); this.setState()}}
          onBlur={() => function(){ val--; this.changeColor(); this.setState()}}
          onChangeText={(title) => this.setState({title})}
          placeholder={'Adventure Name'}
          value={this.state.title}
        />
        <View style={{justifyContent: 'center',
  alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#7AAE62', fontSize: 30}}>Riddle 1</Text>
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onFocus={() => this.setState({border:'red'})}
          onBlur={() => this.setState({border:'green'})}
          onChangeText={(input1) => this.setState({input1})}
          placeholder={'Latitude'}
          value={this.state.input1}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input2) => this.setState({input2})}
          placeholder={'Longitude'}
          value={this.state.input2}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input3) => this.setState({input3})}
          placeholder={'Riddle'}
          value={this.state.input3}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input4) => this.setState({input4})}
          placeholder={'Answer'}
          value={this.state.input4}
        />
        <View style={{justifyContent: 'center',
  alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#7AAE62', fontSize: 30}}>Riddle 2</Text>
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input1) => this.setState({input1})}
          placeholder={'Latitude'}
          value={this.state.input5}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input2) => this.setState({input2})}
          placeholder={'Longitude'}
          value={this.state.input6}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input3) => this.setState({input3})}
          placeholder={'Riddle'}
          value={this.state.input7}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input4) => this.setState({input4})}
          placeholder={'Answer'}
          value={this.state.input8}
        />
        <View style={{justifyContent: 'center',
  alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#7AAE62', fontSize: 30}}>Riddle 3</Text>
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input1) => this.setState({input1})}
          placeholder={'Latitude'}
          value={this.state.input9}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input2) => this.setState({input2})}
          placeholder={'Longitude'}
          value={this.state.input10}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input3) => this.setState({input3})}
          placeholder={'Riddle'}
          value={this.state.input11}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input4) => this.setState({input4})}
          placeholder={'Answer'}
          value={this.state.input12}
        />
        <TouchableHighlight underlayColor='#fafafa' onPress={() => {
            this.setState({title: '', input1: '', input2: '', input3: '', input4: '', input5: '', input6: '', input7: '', input8: '', input9: '', input10: '', input11: '', input12: ''})
          }
        }>
          <View>
            <SubmitButton/>
          </View>
        </TouchableHighlight>
      </View>

    );
  }
};

export default FormView;