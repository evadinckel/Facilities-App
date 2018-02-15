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

const fakeServer = nock('http://localhost:4000', {
  reqHeaders: { hello: 'world' },
  headers: { 'Access-Control-Allow-Origin': '*' }
})
  .get('/vote_hot')
  .reply(200, {
    votes: 1
  });

const fakeServer1 = nock('http://localhost:4000', {
  reqHeaders: { hello: 'world' },
  headers: { 'Access-Control-Allow-Origin': '*' }
})
  .get('/votes_current')
  .reply(200, {
    votes: 1
  });

const fakeServer2 = nock('http://localhost:4000', {
  reqHeaders: { hello: 'world' },
  headers: { 'Access-Control-Allow-Origin': '*' }
})
  .get('/votes_current')
  .reply(200, {
    votes: 1
  });

Enzyme.configure({ adapter: new Adapter() });

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

  it('should click vote hot button and vote goes up', done => {
    const wrapper = mount(<Wrapper />);
    // console.log(votingButton.toJSON())
    // wrapper.find('[id="HotButton"]').simulate('click');

    var fooThing = function() {
      console.log('1');
      axios
        .get('http://localhost:4000/vote_hot')
        .then(response => {
          console.log('bar');
          done();
        })
        .catch(error => {
          console.log('this', error);
          done();
        });
    };
    console.log(fooThing());
    //
    // expect(wrapper.find('[id="HotvoteDisplay"]').text()).toEqual(
    //   'Current votes for Hot: 1'
    // );
  });
});
