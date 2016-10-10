import React, { View, Text, ListView } from 'react-native'
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai'

// App components
import AllAdventureDetail from '../../src/components/AllAdventures/AllAdventureDetail'
import AllAdventureLi from '../../src/components/AllAdventures/AllAdventureDetail'
import AllAdvenContainer from '../../src/components/AllAdventures/AllAdventureDetail'
import AllAdventureList from '../../src/components/AllAdventures/AllAdventureDetail'

import { adventure } from '../mockData'

describe('#AllAdventureDetail', () => {

  const wrapper = shallow(<AllAdventureDetail adven={adventure} />)

  it('AllAdventureDetail component should exists', () => {
    expect(wrapper).to.exist
  })

})


describe('#AllAdventureLi component should exist', function (){

  const wrapper = shallow(<AllAdventureLi adven={adventure}/>)

  it('AllAdventureLi component should exists', () => {
    expect(wrapper).to.exist
  })

  it('should have TouchableHighlight')

})

describe('#AllAdvenContainer component should exist', function (){

  const wrapper = shallow(<AllAdvenContainer adven={adventure}/>)

  it('component should exists', () => {
    expect(wrapper).to.exist
  })

  it('getAllAds method should exist')

  it('getAllAds should be called when mounted')

  it('should render AllAdventuresList')

})

describe('#AllAdventureList component should exist', function (){

  const wrapper = shallow(<AllAdventureList adven={adventure}/>)

  it('AllAdventureList component should exists', () => {
    expect(wrapper).to.exist
  })

  it('should render as many AllAdventureLi as there are items in props.adven')

})
