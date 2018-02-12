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
    const votingButton = shallow(
      <VotingButton />
    );
    console.log(votingButton.toJSON())
    votingButton.find('[id="hotButton"]').simulate('click')
    // const votingButton.voteDisplay

    console.log(votingButton.currentVote)

    expect(votingButton.find('[id="voteDisplay"]').text()).toEqual('Current votes for HOT: 1')

  });
});
