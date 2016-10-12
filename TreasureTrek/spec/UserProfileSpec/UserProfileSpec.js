import React, { View, Text, ListView } from 'react-native';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import UploadPhoto from '../../src/components/UserProfile/UploadPhoto';

describe('#UploadPhoto', () => {

  const wrapper = shallow(<UploadPhoto />)

  it('UploadPhoto component should exists', () => {
    expect(wrapper).to.exist
  })

})