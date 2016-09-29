import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
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
      completion: props.completion
    }
  };

  var toSubmission = function() {
    props.nav.toRoute(SubmissionRoute);
  }

  return (
    <View>
      <TouchableHighlight
        onPress={toSubmission}
        underlayColor={'#00ffff'}>
        <View style={styles.listStyle}>
          <Text style={styles.title}>Riddle # {props.num}</Text>
          <Text>{props.riddle}</Text>
          <Text style={styles.loc}>{props.loc}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

var styles = {
  listStyle : {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    //shadowColor: '#000',
    //shadowOffset: {width: 0, height: 3},
    //shadowOpacity: 0.3,
    //shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    padding: 10
  },
  loc : {
    fontSize: 8,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'blue'
  },
  title: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#ddd",
    fontWeight: 'bold',
    elevation: 1
  }
};

export default Riddle;