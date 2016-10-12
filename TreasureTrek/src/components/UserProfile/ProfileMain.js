import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  AlertIOS,
  Image,
  TouchableHighlight
} from 'react-native';

import UserImage from './UserImage';
import UploadPicButton from './UpdatePicButton';

class UserProfile extends Component {
  constructor(props){
    super(props)
  }

  state = {
    myInfo: {}
  };

  getMyInfo () {
    AsyncStorage.getItem('id_token')
      .then(token=>{
        fetch("https://treasure-trek.herokuapp.com/api/myInfo",{
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': token
            }
        }).then(function (res){
          return res.json()
        }).then((data)=> {
          // set state or do something else with data
          console.log('GET data: ', data)
          this.setState({myInfo: data});
        }).catch((error) => {
          console.log("ERROR:",error);
          this.handleError();
        }).done();
      });
  }

  handleError () {
    AsyncStorage.removeItem('id_token')
      .then(()=>{
        this.errorRedirectToLogin("No Session - Redirecting");
      }).catch(error => {
        console.log('AsyncStorage error: ' + error.message);
        this.errorRedirectToLogin("Internal Error - Redirecting")
      });
  }

  errorRedirectToLogin (message) {
    AlertIOS.alert(message);
    this.props.resetToRoute({
      name: "Login",
      component: Auth
    });
  }

  componentWillMount () {
    this.getMyInfo();
  }

  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'space-between'}}>

        <View style={styles.imageContainer} onLayout={event=>{
          console.log("LAYOUT:",event.nativeEvent.layout)
          let {width, height} = event.nativeEvent.layout;
          dynamicSize.side = Math.min(width, height);
          dynamicSize.borderRadius = dynamicSize.side/2;
          console.log("DYN:", dynamicSize);
        }}>


            <Image style={{height: dynamicSize.side, width: dynamicSize.side, borderRadius:dynamicSize.borderRadius}} source={{uri: this.state.myInfo.photo} || require('../../resources/user-placeholder.png')} />

            {/* Workaround to make a text border
                Made 4 copies of same text and each has its
                shadow offset a different direction
             */}
            <View style={{position: 'absolute', top:10, left: 0, right: 0}}>
            <Text style={{alignSelf: 'center', fontSize: 25, backgroundColor: 'rgba(255,255,255,0)', fontWeight: '600', color: '#e6005c', textShadowColor: '#48BBEC', textShadowOffset: { width:1, height: 1} }}>{this.state.myInfo.username}</Text>
            </View>

            <View style={{position: 'absolute', top:10, left: 0, right: 0}}>
            <Text style={{alignSelf: 'center', fontSize: 25, backgroundColor: 'rgba(255,255,255,0)', fontWeight: '600', color: '#e6005c', textShadowColor: '#48BBEC', textShadowOffset: { width:-1, height: -1} }}>{this.state.myInfo.username}</Text>
            </View>

            <View style={{position: 'absolute', top:10, left: 0, right: 0}}>
            <Text style={{alignSelf: 'center', fontSize: 25, backgroundColor: 'rgba(255,255,255,0)', fontWeight: '600', color: '#e6005c', textShadowColor: '#48BBEC', textShadowOffset: { width:1, height: -1} }}>{this.state.myInfo.username}</Text>
            </View>

            <View style={{position: 'absolute', top:10, left: 0, right: 0}}>
            <Text style={{alignSelf: 'center', fontSize: 25, backgroundColor: 'rgba(255,255,255,0)', fontWeight: '600', color: '#e6005c', textShadowColor: '#48BBEC', textShadowOffset: { width:-1, height: 1} }}>{this.state.myInfo.username}</Text>
            </View>

        </View>

        <View style={styles.fixToBottom}>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Image style={styles.imageStyle} source={require('../../resources/spinning-coin.gif')} />
            </View>
            <View style={styles.contentStyle}>

              <Text style={styles.textInfo}>{this.state.myInfo.points || 0}</Text>

            </View>

          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>Level {this.state.myInfo.level || 0}</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>{Math.floor(this.state.myInfo.points / 500) * 500 + 500 - this.state.myInfo.points} Coins to Next Level</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>Adventures in Progress: {this.state.myInfo.current || 0}</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.contentStyle}>
              <Text style={styles.textInfo}>Created Adventures: {this.state.myInfo.created || 0}</Text>
            </View>
          </View>

          <UploadPicButton nav={this.props} user={this.state.myInfo}/>
        </View>

      </View>
    );
  }
};

let dynamicSize = {
  side: 100,
  borderRadius: 50
}

const styles = {
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
    flex: 1,
    position: 'relative'
    // borderWidth: 1,
    // borderColor: 'black'
  },
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  imageStyle2: {
    // height: 250,
    // width: 250,
    // borderRadius: 125,
    // flex: 1,
    // resizeMode: 'contain',
    // height: null,
    // width: null,
    // borderRadius: 20
  },
  textInfo: {
    color: 'white',
    fontSize: 20,
  },
  infoContainer: {
    height: 45,
    backgroundColor: '#48BBEC',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
    flexDirection: 'row',
  },
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
  fixToBottom: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0
  }
};

export default UserProfile;