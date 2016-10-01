import React, { Component } from 'react';
import { View, Text, AsyncStorage, AlertIOS, TouchableHighlight } from 'react-native';
// import Header from './../auth/Header.js';
// import MyAdventuresList from './myAdventuresList.js';
// import Auth from '../auth/Auth.js';
import MapView from 'react-native-maps';

class MapScreen extends Component {

  // state = {
  //   adventures: []
  // };

  constructor(props) {
    super(props);
    this.state = {
      adventures: props.adventures,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }



  componentWillMount () {

  }

  placeMarkers () {
    return
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render () {
    // console.log("STATE:",this.state);
    return (
      <View>

        <MapView
          style={styles.mapStyle}
          showUserLocation={true}
          followUserLocation={true}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        >
          {this.placeMarkers()}
        </MapView>


      </View>
    );
  }
};

const styles = {
  // containerStyle: {
  //   flex: 1,
  //   borderWidth: 1,
  //   borderRadius: 2,
  //   borderColor: '#ddd',
  //   borderBottomWidth: 0,
  //   //shadowColor: '#000',
  //   //shadowOffset: {width: 0, height: 2},
  //   //shadowOpacity: 0.1,
  //   //shadowRadius: 2,
  //   elevation: 1
  //   //marginLeft: 5,
  //   //marginRight: 5,
  //   //marginTop: 75,
  // },
  mapStyle: {
    width: 350,
    height: 350
  }
};

export default MapScreen;
