import React from 'react';
import { Text, View, Image } from 'react-native';

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
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#7AAE62',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 35,
    color: '#7AAE62',
    marginTop: 5,
    marginRight: 55,
    marginLeft: 55
  },
  menuStyle: {
    height: 50,
    width: 50,
    marginTop: 5
  }
};

// Make the component available to other parts of the app
export default CreateAdventureHeader2;