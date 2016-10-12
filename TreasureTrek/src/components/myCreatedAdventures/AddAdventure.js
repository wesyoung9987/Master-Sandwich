// Import libraries for making a component
import React from 'react';
import {
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight
} from 'react-native';

import AdventureList from './AdventureList';
import CreateAdventure from './createAdventure/createAdventure.js';
import CreateAdventureHeader from './createAdventureHeader';
import CreateAdventureHeader2 from './createAdventure/CreateAdventureHeader2';

// Make a componenet
const AddAdventure = (props) => {

  const routes = [
    {view: <AdventureList nav={props.nav}/>, index: 0, header: <CreateAdventureHeader/>},
    {view: <CreateAdventure nav={props.nav}/>, index: 1, header: <CreateAdventureHeader2/>}
  ];

  return (
    <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      configureScene={(route, routeStack) =>
        Navigator.SceneConfigs.HorizontalSwipeJump}
      renderScene={(route, navigator) =>
      <View style={{ flex: 1 }}>
        <TouchableHighlight underlayColor='#fafafa' onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <View>
          {route.header}
        </View>

      </TouchableHighlight>
        {route.view}
      </View>
      }
    />
  );
};

// Make the component available to other parts of the app
export default AddAdventure;