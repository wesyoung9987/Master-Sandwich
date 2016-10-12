import React, {
  Component,
  StyleSheet,
  DeviceEventEmitter
} from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import UploadPhoto from './UploadPhoto';

const UpdatePicButton = (props) => {

  const uploadPicRoute = {
    name: 'Upload Profile Picture',
    component: UploadPhoto,
    passProps: {
      adven: props.nav,
      user: props.user
    }
  }

  var toUploadPic = function (){
    props.nav.toRoute(uploadPicRoute);
  }

  return (
    <TouchableHighlight
      onPress={toUploadPic}
      underlayColor={'#00ffff'}>
      <View style={styles.infoContainer2}>
        <View style={styles.contentStyle}>
          <Text style={styles.textInfo2}>Update Profile Picture</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

};

const styles = {
  infoContainer2: {
    height: 45,
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
    flexDirection: 'row',
  },
  textInfo2: {
    color: '#48BBEC',
    fontSize: 20,
    marginLeft: 5
  },
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default UpdatePicButton;