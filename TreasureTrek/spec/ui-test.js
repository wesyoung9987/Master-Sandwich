import React, { View, Text } from 'react-native'
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai'

// App components
import AllAdvDetail from '../src/components/AllAdventures/AllAdventureDetail'

describe('Up and running', () => {

  it('Component should exists', () => {
    const wrapper = shallow(<AllAdvDetail />)
    expect(wrapper.find(View)).to.exist
  })
})
