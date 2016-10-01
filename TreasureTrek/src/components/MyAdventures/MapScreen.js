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
      riddles: props.riddles,
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
    return this.state.riddles.map((riddle, i) => {
      if (riddle.latitude) {
        var latitude = typeof riddle.latitude==='Number' ? riddle.latitude : 37.78825;
      } else {
        var latitude = 37.78825;
      }
      if (riddle.longitude) {
        var longitude = typeof riddle.longitude==='Number' ? riddle.longitude : -122.4324;
      } else {
        var longitude = -122.4324;
      }
      return (
        <MapView.Marker
          coordinate={{latitude, longitude}}
          title={'Riddle # '+(i+1)}
          description={riddle.riddle}
          key={i.toString()}
        />
      );
    })
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
  mapStyle: {
    width: 350,
    height: 350
  }
};

export default MapScreen;
