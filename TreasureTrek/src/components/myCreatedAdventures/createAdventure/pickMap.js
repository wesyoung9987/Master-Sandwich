import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  AlertIOS,
  TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';

class MapScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      markerCoords: {
        latitude: props.lat,
        longitude: props.lon
      },
      errorMsg: " "
    };
  }

  componentWillMount () {
    this.initialView();
  }

  initialView () {
    navigator.geolocation.getCurrentPosition(position => {
      let myLat = position.coords.latitude;
      let myLon = position.coords.longitude;
      let markLat = this.state.markerCoords.latitude;
      let markLon = this.state.markerCoords.longitude;
      let initRegion;
      if (!markLat && !markLon) {
        initRegion = {
          latitude: myLat,
          longitude: myLon,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }
      } else {
        let delta = Math.max( Math.abs(myLat-markLat), Math.abs(myLon-markLon) );
        initRegion = {
          latitude: (myLat+markLat)/2,
          longitude: (myLon+markLon)/2,
          latitudeDelta: delta*1.4,
          longitudeDelta: delta*1.4
        }
      }
      this.setState({region: initRegion});
      // Have to set region again at end of callstack to stick
      setTimeout(this.onRegionChange.bind(this,initRegion),0);
    }, error => {
      console.log("ERR:", error)
    }, {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
    )
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  updateLocation (e) {
    this.setState({markerCoords: e.nativeEvent.coordinate});
  }

  setCoords () {
    let lat = this.state.markerCoords.latitude;
    let lon = this.state.markerCoords.longitude;
    if (lat && lon) {
      this.props.setCoords(lat, lon);
      this.props.toBack();
    } else {
      this.setState({
        errorMsg: "Place a Marker!"
      })
    }
  }

  render () {
    return (
      <View style={{flex: 1, marginTop:5, flexDirection: 'column', justifyContent: 'space-between'}}>

        <View style={{margin: 5, position: 'relative', flex: 1}}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            followUserLocation={true}
            region={this.state.region}
            onRegionChange={this.onRegionChange.bind(this)}
            onPress={this.updateLocation.bind(this)}
          >
            <MapView.Marker
              draggable
              coordinate={this.state.markerCoords}
              onDragEnd={this.updateLocation.bind(this)}
            />
          </MapView>
        </View>

        <View>
          <TouchableHighlight style={styles.button} onPress={this.setCoords.bind(this)}  underlayColor='#00ffff'>
              <Text  style={styles.buttonText}> Set Location </Text>
          </TouchableHighlight>
          <Text style={styles.errorText}>{this.state.errorMsg}</Text>
        </View>

      </View>
    );
  }
};


var styles = {
  map: {
    // width: 350,
    // height: 350,
    // margin: 10
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  giveup: {
    padding: 20,
    margin: 20
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    alignSelf: 'center',
    marginBottom: 5
  }
}

export default MapScreen;
