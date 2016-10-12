import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import Submission from './Submission.js';

const Riddle = (props) => {

  const SubmissionRoute = {
    name: "Your Solution",
    component: Submission,
    passProps: {
      nav: props.nav,
      riddle: props.riddle,
      answer: props.answer,
      num: props.num,
      id: props.id,
      completion: props.completion,
      updateCompletion: props.updateCompletion,
      completedArray: props.completedArray
    }
  };

  var toSubmission = function() {
    props.nav.toRoute(SubmissionRoute);
  }

  var showNumber = function() {
    if (props.num === 1) {
      return(
        <View style={styles.iconContainer}>
          <Image style={styles.iconStyle2} source={require('../../resources/one.png')} />
        </View>
      );
    } else if (props.num == 2) {
      return (
        <View style={styles.iconContainer}>
          <Image style={styles.iconStyle2} source={require('../../resources/two.png')} />
        </View>
      );
    } else if (props.num == 3) {
      return (
        <View style={styles.iconContainer}>
          <Image style={styles.iconStyle2} source={require('../../resources/three.png')} />
        </View>
      );
    }
  }


  var solvedStatus = function() {
    return (
      <View style={styles.viewStyle}>
        {showNumber()}
        <View>
          <Text style={styles.statusGreen}>COMPLETED</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.iconStyle} source={require('../../resources/solved.png')} />
        </View>
      </View>
    );
  }

  var unsolvedStatus = function() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.detailStyle}>
          {showNumber()}
        </View>
        <View style={styles.detailStyle}>
          <Text style={styles.statusRed}>UNSOLVED</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.iconStyle} source={require('../../resources/unsolved.png')} />
        </View>
      </View>
    );
  }

  return (

      <TouchableHighlight
        onPress={toSubmission}
        underlayColor={'#00ffff'}>
        <View style={styles.listStyle}>
          <View>
              {props.completion ? solvedStatus() : unsolvedStatus()}
          </View>
        </View>
      </TouchableHighlight>

  );
}

var styles = {
  viewStyle: { // View holding two Texts and Image
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: 320
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 285,
    height: 35
  },
  statusGreen: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    padding: 5,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
    marginTop: 10
  },
  statusRed: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    padding: 5,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    marginTop: 10
  },
  iconStyle: {
    height: 30,
    width: 30
  },
  iconStyle2: {
    height: 45,
    width: 30
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 5
  },
  listStyle : { // List item container
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    padding: 5,
    flexDirection: 'row'
  },
  loc : {
    fontSize: 10,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'blue'
  },
  title: { // Riddle title text
    padding: 5,
    borderColor: "#ddd",
    fontWeight: 'bold',
    elevation: 1,
    flexDirection: 'column'
  }

};

export default Riddle;