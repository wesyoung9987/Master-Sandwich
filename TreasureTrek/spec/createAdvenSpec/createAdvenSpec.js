import React, { View, Text, ListView } from 'react-native';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import AddAdventure from '../../src/components/myCreatedAdventures/AddAdventure';
import AdventureList from '../../src/components/myCreatedAdventures/AdventureList';
import formView from '../../src/components/myCreatedAdventures/createAdventure/formView';
import pickMap from '../../src/components/myCreatedAdventures/createAdventure/pickMap';
import SetImage from '../../src/components/myCreatedAdventures/createAdventure/SetImage';


describe('#AddAdventure', () => {

  const wrapper = shallow(<AddAdventure />)

  it('AddAdventure component should exists', () => {
    expect(wrapper).to.exist
  })

})

describe('#AdventureList', () => {

  const wrapper = shallow(<AdventureList />)

  it('AdventureList component should exists', () => {
    expect(wrapper).to.exist
  })

})

describe('#formView', () => {

  const wrapper = shallow(<formView />)

  it('formView component should exists', () => {
    expect(wrapper).to.exist
  })

})

describe('#pickMap', () => {

  const wrapper = shallow(<pickMap />)

  it('pickMap component should exists', () => {
    expect(wrapper).to.exist
  })

})

describe('#SetImage', () => {

  const wrapper = shallow(<SetImage />)

  it('SetImage component should exists', () => {
    expect(wrapper).to.exist
  })

})