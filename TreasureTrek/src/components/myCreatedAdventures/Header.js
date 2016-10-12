// Import libraries for making a component
import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

// Make a componenet
const Header = (props) => {
  const { textStyle, viewStyle, menuStyle, userStyle } = styles;

  return (
    <View style={viewStyle}>
      <View>
        <Image style={menuStyle} source={require('../../resources/mobile-menu.png')} />
      </View>
      <View>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
      <View>
        <Image style={userStyle} source={require('../../resources/user-placeholder.png')} />
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#DF7376',
    height: 80,
    paddingTop: 30,
    // shadowColor: '#000',
    // shadowOffset: { width:0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuStyle: {
    height: 40,
    width: 40
  },
  userStyle: {
    height: 45,
    width: 45
  }
};

// Make the component available to other parts of the app
export default Header;