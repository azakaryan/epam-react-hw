import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import Header from './header';

expectEnzymify.extend(enzymify());

describe('Header Component', () => {
  it('should render correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });

  it('renders a Header element', () => {
    const wrapper = shallow(<Header />);
    expectEnzymify(wrapper).toBeA('div');
  });
});
