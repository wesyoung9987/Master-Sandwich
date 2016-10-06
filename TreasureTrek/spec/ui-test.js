import React, { View, Text } from 'react-native'
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai'

// App components
import AllAdvDetail from '../src/components/AllAdventures/AllAdventureDetail'

describe('Test runs', () => {

  it('Component should exists', () => {
    const wrapper = shallow(<AllAdvDetail />)
  s  expect(wrapper.find(View))to.exist
  })
})