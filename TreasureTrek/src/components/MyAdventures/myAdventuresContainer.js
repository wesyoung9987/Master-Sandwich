import React from 'react';
import { View, Text } from 'react-native';
import Header from './../auth/Header.js';
import MyAdventuresList from './myAdventuresList.js';

const myAdventuresContainer = (props) => {
  return (
    <View style={styles.containerStyle}>
      <MyAdventuresList nav={props}></MyAdventuresList>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 75
  }
};

export default myAdventuresContainer;