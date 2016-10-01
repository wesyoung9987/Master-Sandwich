import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image } from 'react-native';

class UserProfile extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     fetching: true,
  //     recieved: false,
  //     adventures: []
  //   }
  // }

  // getAllAds(){
  //   var self = this
  //   AsyncStorage.getItem('id_token')
  //   .then(function(data){
  //     fetch("https://treasure-trek.herokuapp.com/api/fetchAll", {
  //       headers: {
  //         "x-access-token": data
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("AllAdventures: ", data)
  //       self.setState({
  //         adventures: data
  //       })
  //     }).catch(error => console.log("ERR:", error))
  //   })
  // }

  // componentDidMount(){
  //   this.getAllAds()
  // }

  render(){
    return (
      <View>
        <Image style={styles.imageStyle} source={require('../../resources/placeholder.jpg')} />
      </View>
    );
  }
};

const styles = {
  imageContainer: {
    height: 300,
    width: 300,

  }
  imageStyle: {
    height: 300,
    width: 300,
    borderRadius: 150
  }
}

export default UserProfile;