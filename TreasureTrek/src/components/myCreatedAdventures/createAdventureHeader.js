import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

// Make a componenet
const CreateAdventureHeader = (props) => {
  const { textStyle, viewStyle, menuStyle, userStyle } = styles;

  return (
    <View style={viewStyle}>
      <View>
        <Image style={menuStyle} source={require('../../resources/plus-button-red.png')} />
      </View>
      <View>
        <Text style={textStyle}>{'Create Adventure'}</Text>
      </View>

    </View>
  );
};

const styles = {
  viewStyle: {
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ed1558',
    padding: 10
  },
  textStyle: {
    paddingTop: 2,
    fontSize: 20,
    color: '#ed1558',
    marginLeft: 55
  },
  menuStyle: {
    height: 30,
    width: 30,
    marginLeft: 12
  },
};

// Make the component available to other parts of the app
export default CreateAdventureHeader;