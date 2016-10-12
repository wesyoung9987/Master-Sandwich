// Import a library to help create a component
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  Navigator,
  KeyboardAvoidingView
} from 'react-native';

import SubmitButton from './SubmitButton';
import MyCreatedAdventures from '../myCreatedAdventures';
import AdventureSubmited from './AdventureSubmited';
import PickMap from './pickMap';
import MenuButton from '../../nav/MenuButton';
import UserButton from '../../nav/UserButton';
import SetImage from './SetImage';

var val = 0;

// Create a component
class FormView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: 0,
      errorMsg: '',
      failed: false,
      title: '',
      where: '',
      image: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      input10: '',
      input11: '',
      input12: '',
      routes: [{view: <SubmitButton/>, index: 0}]
    }
  }

  changeColor(){
    if(val === 0){
      return 'green';
    } else {
      return 'red';
    }
  }

// Expects {title: 'title', image: 'image', adventure: [riddles], startingLocation: 'location'}
  async sendData(data){
    if(data.image === ''){
      return;
    }
    form = {
      title: data.title,
      image: data.image,
      adventure: [
        {
          riddle: data.input3,
          answer: data.input4,
          latitude: Number(data.input1),
          longitude: Number(data.input2)
        },
        {
          riddle: data.input7,
          answer: data.input8,
          latitude: Number(data.input5),
          longitude: Number(data.input6)
        },
        {
          riddle: data.input11,
          answer: data.input12,
          latitude: Number(data.input9),
          longitude: Number(data.input10)
        }
      ],
      startingLocation: data.where
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
        }).then((data)=> {
          this.setState({title: '', where: '', image: '', failed: false, errorMsg: '', input1: '', input2: '', input3: '', input4: '', input5: '', input6: '', input7: '', input8: '', input9: '', input10: '', input11: '', input12: '', routes: [{view: <SubmitButton/>, index: 0}, {view: <AdventureSubmited/>, index: 1}]
          })
          this.redirectToStart();
        }).catch((error) => {
          console.log("ERROR:",error);
          this.handleError();
        }).done();
      });
  }

  redirectToStart () {
    this.props.nav.resetToRoute({
      name: "Create Adventures",
      component: MyCreatedAdventures,
      leftCorner: MenuButton,
      rightCorner: UserButton
    })
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
    this.props.nav.resetToRoute({
      name: "Login",
      component: Auth
    });
  }

  showForm () {
    return (

      <View>
        <TextInput
          autoCapitalize={'none'}
          style={{height: 40, borderColor: this.state.title || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15}}
          onChangeText={(title) => this.setState({title})}
          placeholder={'Adventure Name'}
          value={this.state.title}
        />
        <TextInput
          autoCapitalize={'none'}
          style={{height: 40, borderColor: this.state.where || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10, marginBottom: 5}}
          onChangeText={(where) => this.setState({where})}
          placeholder={'City, State'}
          value={this.state.where}
        />

        <TouchableHighlight style={this.state.image || !this.state.failed ? styles.buttonG : styles.buttonR} onPress={() => this.props.nav.toRoute({
          name: "Upload Adventure Picture",
          component: SetImage,
          passProps: {
            setImage: this.setAdventureImage.bind(this),
            img: this.state.image ? this.state.image : ''
          }
        })}  underlayColor='#00ffff'>
          {this.setImageButtonText()}
        </TouchableHighlight>

        <View style={{justifyContent: 'center',
  alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#24CCFD', fontSize: 20}}>Riddle 1</Text>
        </View>

        <TouchableHighlight style={this.state.input1 || !this.state.failed ? styles.buttonG : styles.buttonR} onPress={() => this.props.nav.toRoute({
          name: "Place Marker",
          component: PickMap,
          passProps: {
            setCoords: this.setRiddle1Coords.bind(this),
            lat: this.state.input1 ? this.state.input1 : 0,
            lon: this.state.input2 ? this.state.input2 : 0
          }
        })}  underlayColor='#00ffff'>
          {this.setButtonText(1)}
        </TouchableHighlight>

        <TextInput
          multiline = {true}
          autoCapitalize={'none'}
          style={{height: 120, borderColor: this.state.input3 || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input3) => this.setState({input3})}
          placeholder={'Riddle'}
          value={this.state.input3}
        />
        <TextInput
          multiline = {true}
          autoCapitalize={'none'}
          style={{height: 120, borderColor: this.state.input4 || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input4) => this.setState({input4})}
          placeholder={'Answer'}
          value={this.state.input4}
        />

        <View style={{justifyContent: 'center',
          alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#24CCFD', fontSize: 20}}>Riddle 2</Text>
        </View>

        <TouchableHighlight style={this.state.input5 || !this.state.failed ? styles.buttonG : styles.buttonR} onPress={() => this.props.nav.toRoute({
          name: "Place Marker",
          component: PickMap,
          passProps: {
            setCoords: this.setRiddle2Coords.bind(this),
            lat: this.state.input5 ? this.state.input5 : 0,
            lon: this.state.input6 ? this.state.input6 : 0
          }
        })}  underlayColor='#00ffff'>
          {this.setButtonText(5)}
        </TouchableHighlight>

        <TextInput
          multiline = {true}
          autoCapitalize={'none'}
          style={{height: 120, borderColor: this.state.input7 || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input7) => this.setState({input7})}
          placeholder={'Riddle'}
          value={this.state.input7}
        />
        <TextInput
          multiline = {true}
          autoCapitalize={'none'}
          style={{height: 120, borderColor: this.state.input8 || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input8) => this.setState({input8})}
          placeholder={'Answer'}
          value={this.state.input8}
        />

        <View style={{justifyContent: 'center',
          alignItems: 'center', marginTop: 10}}>
          <Text style={{color: '#24CCFD', fontSize: 20}}>Riddle 3</Text>
        </View>

        <TouchableHighlight style={this.state.input9 || !this.state.failed ? styles.buttonG : styles.buttonR} onPress={() => this.props.nav.toRoute({
          name: "Place Marker",
          component: PickMap,
          passProps: {
            setCoords: this.setRiddle3Coords.bind(this),
            lat: this.state.input9 ? this.state.input9 : 0,
            lon: this.state.input10 ? this.state.input10 : 0
          }
        })}  underlayColor='#00ffff'>
          {this.setButtonText(9)}
        </TouchableHighlight>

        <TextInput
          multiline = {true}
          autoCapitalize={'none'}
          style={{height: 120, borderColor: this.state.input11 || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input11) => this.setState({input11})}
          placeholder={'Riddle'}
          value={this.state.input11}
        />
        <TextInput
          multiline = {true}
          autoCapitalize={'none'}
          style={{height: 120, borderColor: this.state.input12 || !this.state.failed ? 'grey' : 'red', borderWidth: 1, borderRadius: 10, fontSize: 20, paddingLeft: 15, paddingRight: 15, marginTop: 10}}
          onChangeText={(input12) => this.setState({input12})}
          placeholder={'Answer'}
          value={this.state.input12}
        />

        <TouchableHighlight underlayColor='#fafafa' onPress={this.checkForm.bind(this)}
        >
          <View>
            {this.state.routes[this.state.routes.length - 1].view}
          </View>
        </TouchableHighlight>
        <Text style={styles.errorText}>{this.state.errorMsg}</Text>
      </View>

    );
  }

  checkForm () {
    var coordsSet = [1,2,5,6,9,10].every(num => this.state["input"+num]);
    var textSet = [3,4,7,8,11,12].every(num => this.state["input"+num])

    if (!coordsSet) {
      this.setState({
        errorMsg: "Place markers for all riddles",
        failed: true
      })
    } else if (!textSet) {
      this.setState({
        errorMsg: "Enter text for all fields",
        failed: true
      })
    } else if (!this.state.title || !this.state.where) {
      this.setState({
        errorMsg: "Give the adventure a name and location",
        failed: true
      })
    } else if (!this.state.image ) {
      this.setState({
        errorMsg: "Set a photo for the adventure",
        failed: true
      })
    } else {
      this.sendData(this.state);
    }
  }

  setAdventureImage (url) {
    this.setState({
      image: url
    });
  }

  setRiddle1Coords (lat, lon) {
    this.setState({
      input1: lat,
      input2: lon
    });
  }

  setRiddle2Coords (lat, lon) {
    this.setState({
      input5: lat,
      input6: lon
    });
  }

  setRiddle3Coords (lat, lon) {
    this.setState({
      input9: lat,
      input10: lon
    });
  }

  setButtonText (num) {
    if (this.state["input"+num]) {
      return (
        <Text  style={styles.buttonText}> Change Location </Text>
      )
    } else {
      return (
        <Text  style={styles.buttonText}> Set Location </Text>
      )
    }
  }

  setImageButtonText () {
    if (this.state.image === '') {
      return (
        <Text  style={styles.buttonText}> Choose Adventure Picture </Text>
      )
    } else {
      return (
        <Text  style={styles.buttonText}> Change Adventure Picture </Text>
      )
    }
  }

  render() {
    // console.log(this.props);
    // console.log("STATE:", this.state);
    return (
      <View>
        {this.showForm()}
      </View>
    );
  }
};

var styles = {
  map: {
    margin: 10
  },
  giveup: {
    padding: 20,
    margin: 20
  },
  buttonG: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonR: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  }
}

export default FormView;
