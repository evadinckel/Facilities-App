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

var voteHotCall;
var allVotesCall;

beforeEach(() => {

  allVotesCall = nock('http://localhost:4000')
    .get('/votes_current')
    .reply(200, {
      hotVotes: 50,
      coldVotes: 50,
      neutralVotes: 50
    });

  voteHotCall = nock('http://localhost:4000')
    .get('/vote_hot')
    .reply(200, {
      votes: 10
    });
});

afterEach(()=>{
  nock.cleanAll()
})

describe('Inital test', () => {
  it('should render a Vote Hot component in isolation', () => {
    const wrapper = mount(
      <VoteButton
        buttonID={'HotButton'}
        className={'Hot Class'}
        buttonText={'Hot'}
      />
    );
    expect(wrapper.find('[id="HotButton"]').text()).toEqual('Vote Hot!');
  });

  it('should render a Vote Hot component in Wrapper', () => {
    const wrapper = mount(<Wrapper />);
    expect(wrapper.find('[id="HotButton"]').text()).toEqual('Vote Hot!');
  });

  // it('should click vote hot button and vote goes up', (done) => {
  //   // const spy = jest.spyOn(Wrapper.prototype, 'buttonClick');
  // // const isPlaying = video.play();
  //   const wrapper = mount(<Wrapper />);
  //   // console.log(votingButton.toJSON())
  //
  //   // expect(spy).toHaveBeenCalled();
  //   // console.log(spy)
  //
  //   // var fooThing = function() {
  //   //   console.log('1');
  //   //   axios
  //   //     .get('http://localhost:4000/vote_hot')
  //   //     .then(response => {
  //   //       console.log('bar');
  //   //       done();
  //   //     })
  //   //     .catch(error => {
  //   //       console.log('this', error);
  //   //       done();
  //   //     });
  //   // };
  //   // console.log(fooThing());
  //  //  setTimeout(function() {
  //  //  expect(wrapper.find('[id="HotvoteDisplay"]').text()).toEqual(
  //  //      'Current votes for Hot: 50'
  //  //    );
  //  //    wrapper.find('[id="HotButton"]').simulate('click');
  //  //    //
  //  // // done();
  //  //  }, 9000)
  //  //
  //  //  expect(wrapper.find('[id="HotvoteDisplay"]').text()).toEqual(
  //  //    'Current votes for Hot: 1000000'
  //  //  );
  //  //  done()
  //
  //
  //
  //
  //   //find initial state of votes
  //   // find button and click
  //   // wait 10 seconds
  //   //expect change
  //   //tell test it's done
  // });

  it('clicks Hot Button and finds vote counter change on page',(done)=>{
    const wrapper = mount(<Wrapper />);
    /*
      find label on page for vote count text
      find button that is vote hot button
      click button
      wait 10 seconds for mock API call to complete
      see a change on the lavel for vote count text: votes are expected result
    */
    // voteHotCall.done();

  expect(wrapper.find('[id="HotvoteDisplay"]').text()).toEqual("Current votes for Hot: 50")

  })
});
