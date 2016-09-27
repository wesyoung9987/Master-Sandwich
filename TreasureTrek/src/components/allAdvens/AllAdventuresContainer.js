import React from 'react';
import { View, Text } from 'react-native';
import AllAdventuresList from './AllAdventuresList.js';

const AllAdventures = (props) => {
  return (
    <View>
      <AllAdventuresList nav={props}></AllAdventuresList>
    </View>
  );
};

export default AllAdventures
