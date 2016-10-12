import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Platform,
  DeviceEventEmitter,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import Credentials from '../../UserProfile/credentials';

import { RNS3 } from 'react-native-aws3';

import ImagePicker from 'react-native-image-picker';

class SetImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      waiting: false,
      avatarSource: null,
      imageURL: null
    };
  }

  setSpinner() {
    this.setState({
      waiting: !this.state.waiting
    })
  };

  selectPhotoTapped() {
    const options = {
      quality: 0.5,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;

        // You can display the image using either:
        // source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        //Or:
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }

        this.setState({
          avatarSource: source
        });
        console.log('it is ',this.state.avatarSource)
      }
    });
  }

  getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  savePhoto(){
    AsyncStorage.getItem('id_token')
      .then(token=>{
        if(this.state.avatarSource === null){
          return;
        }
        var sendPhoto = this.state.avatarSource.uri;
        console.log('here it is ', sendPhoto)
        var rand = this.getRandomInt(1, 10000);
        var photoName = 'adventure-image' + token + rand + '.jpg';
        let file = {
              uri: sendPhoto,
              name: photoName,
              type: 'image/jpeg'
          }


        let opts = {
            keyPrefix: 'photos/',
            bucket: 'treasuretrek',
            region: 'us-west-2',
            accessKey: Credentials.accessKey,
            secretKey: Credentials.secretKey,
            successActionStatus: 201
        };


        RNS3.put(file, opts).then(response => {
          if(response.status !== 201){
            throw new Error('Failed to upload image to S3', response);
          }
          console.log('*** BODY ***', response.body.postResponse.location);
          this.setState({
            imageSource: response.body.postResponse.location
          });
          this.setPhoto();

        })
      });
      this.setSpinner();

  }

  setPhoto () {
    let img = this.state.imageSource;
    this.props.setImage(img);
    this.props.toBack();
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
        {this.state.waiting ?
          <ActivityIndicator style={{marginTop: 30}} color={'#48BBEC'} size={'large'}/> :
          <TouchableOpacity onPress={this.savePhoto.bind(this)}>

            <View style={styles.viewStyle}>

              <Text style={styles.titleStyle}>USE PHOTO</Text>

            </View>

          </TouchableOpacity>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 125,
    width: 250,
    height: 250
  },
  viewStyle: {
    marginTop: 20,
    // shadowColor: '#000',
    // shadowOffset: { width:0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ed1558',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.3
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    color: '#ed1558',
    marginLeft: 75,
    marginRight: 75
  }
});

export default SetImage;