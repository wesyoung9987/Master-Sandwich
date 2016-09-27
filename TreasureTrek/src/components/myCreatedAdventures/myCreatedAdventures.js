// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import AddAdventure from './AddAdventure';
import AdventureList from './AdventureList';

// Create a component
const MyCreatedAdventures = () => (
  // flex 1 allows the view to scroll without bouncing back
  <View style={{ flex: 1 }}>
    <Header headerText={' MY CREATED\nADVENTURES'}/>
    <AddAdventure />
    <AdventureList />
  </View>
);

export default MyCreatedAdventures;