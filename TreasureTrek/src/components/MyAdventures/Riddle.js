import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const Riddle = (props) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.title}>Riddle # {props.num}</Text>
      <Text>{props.riddle}</Text>
      <Text style={styles.loc}>{props.loc}</Text>
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