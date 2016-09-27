// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a componenet
const Header = (props) => {
  const { textStyle, viewStyle, menuStyle, userStyle } = styles;

  return (
    <View style={viewStyle}>
      <View>
        <Image style={menuStyle} source={require('../../../resources/plus-button.png')} />
      </View>
      <View>
        <Text style={textStyle}>{'Create Adventure'}</Text>
      </View>

    </View>
  );
};

const styles = {
  viewStyle: {
    marginTop: 20,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#7AAE62'
  },
  textStyle: {
    fontSize: 35,
    color: '#7AAE62',
    marginLeft: 20,
    marginTop: 13
  },
  menuStyle: {
    height: 50,
    width: 50,
    marginTop: 12,
    marginLeft: 12
  },
};

// Make the component available to other parts of the app
export default Header;