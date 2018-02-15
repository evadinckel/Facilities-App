import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';
import VoteButton from '../../src/VoteButton.js';
import Wrapper from '../../src/Wrapper.js';
import axios from 'axios';
Enzyme.configure({ adapter: new Adapter() });

var allVotesCall;

beforeEach(() => {

  allVotesCall = nock('http://localhost:4000')
    .get('/votes_current')
    .reply(200, {
      hotVotes: 50,
      coldVotes: 50,
      neutralVotes: 50
    });
});

afterEach(()=>{
  nock.cleanAll()
});

describe('Inital test', () => {
  it('clicks Hot Button and finds vote counter change on page',()=>{
    const wrapper = mount(<Wrapper />);
    /*
      find label on page for vote count text
      find button that is vote hot button
      click button
      wait 10 seconds for mock API call to complete
      see a change on the lavel for vote count text: votes are expected result
    */
    expect(wrapper.find('[id="HotvoteDisplay"]').text()).toEqual("Current votes for Hot: 50");
  });
});
