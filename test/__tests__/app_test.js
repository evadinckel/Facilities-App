import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../src/App.js';

// Enzyme.configure({ adapter: new Adapter() });


describe('Initial cookie test', () => {
  it('should render a Vote Hot prop', () => {

  const wrapper = mount(
      <VoteHotButton />
    );
    expect(wrapper.find('[id="hotButton"]').text()).toEqual('Vote Hot!')
  });
