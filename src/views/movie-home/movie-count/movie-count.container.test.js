import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieCount, { mapStateToProps } from './movie-count.container';

expectEnzymify.extend(enzymify());


describe('Search Filters Container Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieCount />);
    expect(component).toMatchSnapshot();
  });

  it('test mapStateToProps', () => {
    const count = mapStateToProps(new Map([['movies', []]])).count;
    expect(count).toEqual(0);
  });

  it('test mapStateToProps', () => {
    const count = mapStateToProps(new Map([['movies', [{}, {}]]])).count;
    expect(count).toEqual(2);
  });
});
