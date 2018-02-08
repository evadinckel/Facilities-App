import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VotingButton from './index.js';


Enzyme.configure({ adapter: new Adapter() });

describe('Inital test', () => {
  it('should render a Vote Hot prop', () => {
    // const component = shallow(<VotingButton />)

    const wrapper = mount(
       <VotingButton />
   );
   // console.log(wrapper.find('#hotButton'))
   // expect(wrapper.prop('children')).toEqual('Vote Hot!');
   expect(wrapper.find('[id="hotButton"]').text()).toEqual('Vote Hot!')
  });

  it('should click vote hot button and vote goes up', () => {
    const wrapper = mount(
       <VotingButton />
   );

   wrapper.find('[id="hotButton"]').simulate('click')
   expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Hello Nero, the vote stands at 1')
   wrapper.find('[id="hotButton"]').simulate('click')
   expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Hello Nero, the vote stands at 2')

  });

  it('should click vote cold button and vote goes down', () => {
    const wrapper = mount(
       <VotingButton />
   );

   wrapper.find('[id="coldButton"]').simulate('click')
   expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Hello Nero, the vote stands at -1')
   wrapper.find('[id="coldButton"]').simulate('click')
   expect(wrapper.find('[id="voteDisplay"]').text()).toEqual('Hello Nero, the vote stands at -2')

  });
});
