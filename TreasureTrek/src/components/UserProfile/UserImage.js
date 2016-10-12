import React, { Component, StyleSheet, DeviceEventEmitter } from 'react';
import { View, Text, AsyncStorage, Image } from 'react-native';

class UserProfile extends Component {

  constructor(props){
    console.log('props are: ', props)
    super(props)
  }

  state = {file: {uri: this.props.image} || require('../../resources/placeholder.png')};

  render(){
    return (
      <View>
        <Image style={styles.imageStyle} source={this.state.file} />
      </View>
    );
  }
};

const styles = {
  imageContainer: {
    height: 250,
    width: 250
  },
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 125
  }
};

export default UserProfile;