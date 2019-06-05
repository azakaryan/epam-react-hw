import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import SearchFilters, { mapDispatchToProps } from './search-filters.container';

expectEnzymify.extend(enzymify());


describe('Search Filters Container Component', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchFilters />);
    expect(component).toMatchSnapshot();
  });

  it('should dispatch an action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onFiltersApply();
    // TODO How to test this.
    expect(dispatch.mock.calls[0][0](() => {}, () => (new Map([['filters', []]])))).toBeTruthy();
  });
});
