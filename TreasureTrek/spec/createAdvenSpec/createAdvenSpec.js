import React, { View, Text, ListView } from 'react-native';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import AddAdventure from '../../src/components/myCreatedAdventures/AddAdventure';

describe('#AddAdventure', () => {

  const wrapper = shallow(<AddAdventure />)

  it('AddAdventure component should exists', () => {
    expect(wrapper).to.exist
  })

})