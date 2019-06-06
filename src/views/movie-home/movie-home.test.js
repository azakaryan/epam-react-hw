import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieHome from './movie-home';

expectEnzymify.extend(enzymify());
const onLoad = () => {};

describe('Movie Home Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieHome onLoad={onLoad} />);
    expect(component).toMatchSnapshot();
  });

  it('renders a Movie Home component', () => {
    const wrapper = shallow(<MovieHome onLoad={onLoad} />);
    expectEnzymify(wrapper).toBeA('div');
  });

  it('find element', () => {
    let k = 1;
    const onLoad = () => k = k + 1;
    const wrapper = shallow(<MovieHome onLoad={onLoad} />);
    expect(k).toEqual(2);
    const el = wrapper.find({ id: 'movie-home' });
    expectEnzymify(el).toBeA('div');
  });
});
