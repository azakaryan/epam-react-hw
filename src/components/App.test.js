import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import App from './App';

expectEnzymify.extend(enzymify());


describe('App Component', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
  //
  // it('renders a App element', () => {
  //   const wrapper = shallow(<App />);
  //   expectEnzymify(wrapper).toBeA('Switch');
  // });
});
