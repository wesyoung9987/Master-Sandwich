import React, { Component } from 'react';
import { View, Text, AsyncStorage, AlertIOS, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      riddles: props.riddles,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      coords: []
    };
  }

  componentWillMount () {
    this.getMarkerCoords();
    this.initialView();
  }

  getMarkerCoords () {
    var coords = this.state.riddles.map((riddle, i) => {
      if (riddle.latitude) {
        var latitude = typeof riddle.latitude==='Number' ? riddle.latitude : Number(riddle.latitude);
      } else {
        var latitude = 37.78825; // default value for existing adventures
      }
      if (riddle.longitude) {
        var longitude = typeof riddle.longitude==='Number' ? riddle.longitude : Number(riddle.longitude);
      } else {
        var longitude = -122.4324; // default value for existing adventures
      }
      return {longitude, latitude};
    });
    this.setState({coords: coords});
  }

  placeMarkers () {
    return this.state.riddles.map((riddle, i) => {
      return (
        <MapView.Marker
          coordinate={{
            latitude: this.state.coords[i].latitude,
            longitude: this.state.coords[i].longitude
          }}
          title={'Riddle #'+(i+1)}
          description={riddle.riddle}
          key={i.toString()}
        />
      );
    })
  }

  initialView () {
    navigator.geolocation.getCurrentPosition(position => {
      let minLat = position.coords.latitude;
      let maxLat = position.coords.latitude;
      let minLon = position.coords.longitude;
      let maxLon = position.coords.longitude;
      this.state.coords.forEach(marker => {
        if (marker.latitude > maxLat) maxLat = marker.latitude;
        if (marker.latitude < minLat) minLat = marker.latitude;
        if (marker.longitude > maxLon) maxLon = marker.longitude;
        if (marker.longitude < minLon) minLon = marker.longitude;
      })
      let delta = maxLat-minLat > maxLon-minLon ? maxLat-minLat : maxLon-minLon;
      let initRegion = {
        latitude: (maxLat+minLat)/2,
        longitude: (maxLon+minLon)/2
      }
      initRegion.latitudeDelta = delta*1.4;
      initRegion.longitudeDelta = delta*1.4;
      this.setState({region: initRegion});

    }, error => console.log("ERR:", error)
    )
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render () {
    return (
      <View>

        <MapView
          style={styles.mapStyle}
          showsUserLocation={true}
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
