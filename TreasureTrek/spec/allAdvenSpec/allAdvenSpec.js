import React, { View, Text } from 'react-native'
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai'

// App components
import AllAdvDetail from '../../src/components/AllAdventures/AllAdventureDetail'

describe('#AllAdventure', () => {

  var adven = {
    adventure: [1, 2, 3]
  }

  it('Component should exists', () => {
    const wrapper = shallow(<AllAdvDetail adven={adven}/>)
    expect(wrapper).to.exist
  })
})
