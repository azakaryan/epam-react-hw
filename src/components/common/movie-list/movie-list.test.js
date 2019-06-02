import React from 'react';
import { shallow } from 'enzyme';

import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieList from './movie-list';

expectEnzymify.extend(enzymify());

describe('MovieList Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MovieList debug />);

    expect(component).toMatchSnapshot();
  });

  // it('renders a MovieList element', () => {
  //   const wrapper = shallow(<MovieList debug />);
  //   // TODO how to use expect for both cases.
  //   expectEnzymify(wrapper).toBeA('div');
  // });

  it('should render movies correctly with given data', () => {
    const component = shallow(<MovieList/>);
    expect(component).toMatchSnapshot();
  });
});
