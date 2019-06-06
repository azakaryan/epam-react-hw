import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieCount from './movie-count';

expectEnzymify.extend(enzymify());

describe('Movie Count Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieCount count="2" />);

    expect(component).toMatchSnapshot();
  });

  it('renders a movie count component', () => {
    const wrapper = shallow(<MovieCount count="5" />);
    expectEnzymify(wrapper).toBeA('div');
  });

  it('renders a movie count component with correct count', () => {
    const wrapper = shallow(<MovieCount count="5" />);

    expectEnzymify(wrapper.find({ id: 'count' }).text()).toEqual('5');
  });
});
