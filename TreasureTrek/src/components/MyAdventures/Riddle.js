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

  var solvedStatus = function() {
    return (
      <View style={styles.viewStyle}>
        <View>
          <Text style={styles.title}>
            Riddle # {props.num} ---
          </Text>
        </View>
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
        <View>
          <Text style={styles.title}>
            Riddle # {props.num} ---
          </Text>
        </View>
        <View >
          <Text style={styles.statusRed}>UNSOLVED</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.iconStyle} source={require('../../resources/unsolved.png')} />
        </View>
      </View>
    );
  }

  return (
    <View>
      <TouchableHighlight
        onPress={toSubmission}
        underlayColor={'#00ffff'}>
        <View style={styles.listStyle}>
          <View style={styles.viewStyle}>
              {props.completion ? solvedStatus() : unsolvedStatus()}
        </View>
      </View>
      </TouchableHighlight>
    </View>
  );
}

var styles = {
  viewStyle: { // View holding two Texts and Image
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between', // added justify
    flex: 1
  },
  detailsStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 12,
    width: 285,
    height: 35
  },
  statusGreen: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    padding: 5,
    // marginLeft: 23,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green'
  },
  statusRed: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    padding: 5,
    // marginLeft: 23,
    elevation: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red'
  },
  iconStyle: {
    height: 25,
    width: 25
  },
  iconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    //marginLeft: 80 // removed
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
    // marginLeft: 5, // removed
    //marginRight: 5, // removed
    borderColor: "#ddd",
    fontWeight: 'bold',
    elevation: 1,
    flexDirection: 'column'
  }

};

export default Riddle;