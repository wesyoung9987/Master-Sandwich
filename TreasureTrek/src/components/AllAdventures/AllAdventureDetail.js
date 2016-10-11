import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
  ScrollView
} from 'react-native';

// App components
import MenuButton from '../nav/MenuButton';
import MyAdventures from '../MyAdventures/myAdventuresContainer';
import MapScreen from './MapScreen';
import UserButton from '../nav/UserButton';
import Reviews from '../Reviews/Reviews.js';

class AllAdventureDetail extends Component {

  constructor(props){
    super(props)
    this.state = {
      showRiddleView: true,
      toggletext: "See Reviews"
    }
  }

  advenAccept(){
    AsyncStorage.getItem('id_token')
      .then(token => {
        fetch("https://treasure-trek.herokuapp.com/api/pickAd", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "x-access-token": token
          },
          body: JSON.stringify({
            adventureid: this.props.adven._id
          })
        })
        .then(res => {
          return res.json()
        })
        .then(json => {
          this.props.resetToRoute({
            name: "My Adventures",
            component: MyAdventures,
            leftCorner: MenuButton,
            rightCorner: UserButton
          })
        })
        .catch(err => {
          console.error("failed to send adventure accept: ", err)
        })
      })
  }

  showReviews () {
    return (
      <View><Reviews nav={this.props.nav} myAdventure={this.props.adven} stars={this.props.adven.stars}/></View>
    );
  }

  showRiddles() {
    var riddleList = this.props.adven.adventure.map((riddle, index) => {
      var riddleNum = index+1
      return (
        <View key={riddleNum} style={style.listStyle}>
          <Text style={{ fontSize: 14 }}>{riddleNum} : {riddle.riddle}</Text>
        </View>
      );
    })

    return (
      <ScrollView>
        {riddleList}
      </ScrollView>
    )
  }

  toggleRiddleReview(){
    this.setState({ showRiddleView: !this.state.showRiddleView})
    if (this.state.showRiddleView ){
      this.setState({ toggletext: "See Riddles"})
    } else {
      this.setState({ toggletext: "See Reviews"})
    }
  }

  render(){
    return (
      <View style={style.container}>

        <View style={style.map}>
          <MapScreen riddles={this.props.adven.adventure}/>
        </View>


          {this.state.showRiddleView ? this.showRiddles() : this.showReviews()}

        <View>
          <TouchableHighlight style={style.button} underlayColor='#00ffff' onPress={this.toggleRiddleReview.bind(this)}>
            <Text style={style.buttonText}>{this.state.toggletext}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.button} onPress={this.advenAccept.bind(this)}>
            <Text style={style.buttonText}>Accept</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

};

var style = {
  container: {
    flex: 1,
    marginTop:5,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  map: {
    margin: 5,
    position: 'relative',
    flex:1
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 2,
    marginBottom: 2, // changed from 10
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  listStyle : {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    padding: 5,
  },
  loc : {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'gray'
  },
  title: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold',
    elevation: 1,
    flexDirection: 'column'
  }
}

export default AllAdventureDetail
