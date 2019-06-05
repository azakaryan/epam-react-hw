import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import SortFilters, { mapDispatchToProps } from './sort-filters.containers';


expectEnzymify.extend(enzymify());
const onFiltersApply = () => {};

describe('Sort Filters Container Component', () => {
  it('should render correctly', () => {
    const component = shallow(<SortFilters onFiltersApply={onFiltersApply} />);
    expect(component).toMatchSnapshot();
  });

  it('should dispatch an action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onFiltersApply();
    expect(dispatch.mock.calls[0][0]('', () => (new Map([['movies', []]])))).toEqual(undefined);
  });
});
