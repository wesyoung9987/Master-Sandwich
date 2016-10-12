import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  AlertIOS
} from 'react-native';

import AdventureDetail from './AdventureDetails';
import Collapsible from 'react-native-collapsible';

class AdventureList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adventures: []
    }
  }

  componentWillMount () {
    AsyncStorage.getItem('id_token')
      .then(token=>{
        fetch("https://treasure-trek.herokuapp.com/api/fetchCreated",{
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': token
            }
        }).then(function (res){
          return res.json()
        }).then((data)=> {
          // set state or do something else with data
          this.setState({adventures: data});
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
      component: Auth,
      hideNavigationBar: true
    });
  }

  renderAdventures(){
    return this.state.adventures.map(singleAdventure =>
      // would be better to put item id as key instead of title if singleAdventure had id
      <AdventureDetail key={singleAdventure._id} singleAdventure={singleAdventure} nav={this.props.nav}/>
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAdventures()}
      </ScrollView>
    );
  }
}

export default AdventureList;