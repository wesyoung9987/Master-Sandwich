// Import a library to help create a component
import React from 'react';
import { View } from 'react-native';

import AddAdventure from './AddAdventure';
import AdventureList from './AdventureList';

// Create a component
const MyCreatedAdventures = (props) => (
  // flex 1 allows the view to scroll without bouncing back
  <View style={{ flex: 1 }}>
    <AddAdventure nav={props}/>
  </View>
);

export default MyCreatedAdventures;