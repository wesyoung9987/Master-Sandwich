// Import a library to help create a component
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, AsyncStorage, AlertIOS } from 'react-native';
import SubmitButton from './SubmitButton';

var val = 0;

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
// Expects {title: 'title', adventure: [riddles], startingLocation: 'location'}
  async sendData(data){
    form = {
      title: data.title,
      adventure: [
        {
          riddle: data.input3,
          answer: data.input4,
          location: data.input1
        },
        {
          riddle: data.input7,
          answer: data.input8,
          location: data.input5
        },
        {
          riddle: data.input11,
          answer: data.input12,
          location: data.input9
        }
      ],
      startingLocation: data.input1
    }

    AsyncStorage.getItem('id_token')
      .then(token=>{
        fetch("https://treasure-trek.herokuapp.com/api/createAd",{
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
          },
          body: JSON.stringify(form)
        }).then(function (res){
          return res.json()
        }).catch((error) => {
          console.log("ERROR:",error);
          this.handleError();
        }).done();
      });
  }

  handleError () {
    AsyncStorage.removeItem('id_token')
      .then(()=>{
        this.errorRedirectToLogin("No Session - Redirecting");
      }).catch(error => {
        console.log('AsyncStorage error: ' + error.message);
        this.errorRedirectToLogin("Internal Error - Redirecting")
      });
  }

  errorRedirectToLogin (message) {
    AlertIOS.alert(message);
    this.props.resetToRoute({
      name: "Login",
      component: Auth
    });
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
          onChangeText={(input5) => this.setState({input5})}
          placeholder={'Latitude'}
          value={this.state.input5}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input6) => this.setState({input6})}
          placeholder={'Longitude'}
          value={this.state.input6}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input7) => this.setState({input7})}
          placeholder={'Riddle'}
          value={this.state.input7}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input8) => this.setState({input8})}
          placeholder={'Answer'}
          value={this.state.input8}
        />
        <View style={{justifyContent: 'center',
  alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#7AAE62', fontSize: 30}}>Riddle 3</Text>
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input9) => this.setState({input9})}
          placeholder={'Latitude'}
          value={this.state.input9}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input10) => this.setState({input10})}
          placeholder={'Longitude'}
          value={this.state.input10}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input11) => this.setState({input11})}
          placeholder={'Riddle'}
          value={this.state.input11}
        />
        <TextInput
          multiline = {true}
          style={{height: 120, borderColor: 'gray', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input12) => this.setState({input12})}
          placeholder={'Answer'}
          value={this.state.input12}
        />
        <TouchableHighlight underlayColor='#fafafa' onPress={() => {
            this.sendData(this.state);
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