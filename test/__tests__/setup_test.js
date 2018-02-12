import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VotingButton from '../../src/votingButton.js';


Enzyme.configure({ adapter: new Adapter() });

describe('Inital test', () => {
  it('should render a Vote Hot prop', () => {

    const wrapper = mount(
      <VotingButton />
    );

    expect(wrapper.find('[id="hotButton"]').text()).toEqual('Vote Hot!')
  });


  it('should click vote hot button and vote goes up', () => {
    const wrapper = shallow(
      <VotingButton />
    );

    wrapper.find('[id="hotButton"]').simulate('click')
    const votingButton = ReactTestUtils.renderIntoDocument(
      <VotingButton />
    )

    expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Current votes for HOT: 1')

  });

  //
  // it('should click vote cold button and vote goes down', () => {
  //   const wrapper = mount(
  //      <VotingButton />
  //  );
  //
  //  wrapper.find('[id="coldButton"]').simulate('click')
  //  expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Hello Nero, the vote stands at -1')
  //  wrapper.find('[id="coldButton"]').simulate('click')
  //  expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Hello Nero, the vote stands at -2')

});
