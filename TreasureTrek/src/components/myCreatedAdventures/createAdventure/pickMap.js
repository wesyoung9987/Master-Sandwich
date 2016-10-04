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
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      markerCoords: {
        latitude: props.lat,
        longitude: props.lon
      }
    };
  }

  componentWillMount () {
    // console.log("COMP WILL MOUNT");
    this.initialView();
  }


  initialView () {
    // console.log("INITIAL VIEW");
    navigator.geolocation.getCurrentPosition(position => {
      console.log("POS:", position);
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
    }, error => {
      console.log("ERR:", error)
    }, {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
    )
  }

  onRegionChange(region) {
    // console.log("UPDATE REGION");
    this.setState({ region });
  }

  updateLocation (e) {
    // console.log("UPDATE MARKER");
    // console.log("EVENTCOORDS:",e.nativeEvent.coordinate);
    this.setState({markerCoords: e.nativeEvent.coordinate});
  }

  setCoords () {
    this.props.setCoords(this.state.markerCoords.latitude, this.state.markerCoords.longitude);
    this.props.toBack();
  }

  render () {
    // console.log("REG:", this.state.region);
    return (
      <View style={{flex: 1, marginTop:5}}>

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

        <TouchableHighlight style={styles.button} onPress={this.setCoords.bind(this)}  underlayColor='#00ffff'>
            <Text  style={styles.buttonText}> Set Location </Text>
        </TouchableHighlight>

      </View>
    );
  }
};


var styles = {
  map: {
    width: 350,
    height: 350,
    margin: 10
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
}

export default MapScreen;
