import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

// Make a componenet
const CreateAdventureHeader2 = (props) => {
  const { textStyle, viewStyle, menuStyle, userStyle } = styles;

  return (
    <View style={viewStyle}>
      <View>
        <Image style={menuStyle} source={require('../../../resources/double-arrow-left.png')} />
      </View>
      <View>
        <Text style={textStyle}>{'Go Back'}</Text>
      </View>
      <View>
        <Image style={menuStyle} source={require('../../../resources/double-arrow-left.png')} />
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.3
  },
  textStyle: {
    fontSize: 20,
    color: '#ed1558',

    marginRight: 55,
    marginLeft: 55
  },
  menuStyle: {
    height: 25,
    width: 25,

  }
};

// Make the component available to other parts of the app
export default CreateAdventureHeader2;