import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import SortFilters from './sort-filters';

expectEnzymify.extend(enzymify());
const onFiltersApply = () => {};

describe('Sort Filters Component', () => {
  it('should render correctly', () => {
    const component = shallow(<SortFilters onFiltersApply={onFiltersApply} />);

    expect(component).toMatchSnapshot();
  });

  it('renders a sort filters component', () => {
    const wrapper = shallow(<SortFilters onFiltersApply={onFiltersApply} />);
    expectEnzymify(wrapper).toBeA('div');
  });

  it('set state on sort filters component', () => {
    const wrapper = shallow(<SortFilters onFiltersApply={onFiltersApply} />);
    wrapper.find({ id: 'rating' }).simulate('click');
    expect(wrapper.state('sortByValue')).toEqual('vote_count');
    wrapper.find({ id: 'release_date' }).simulate('click');
    expect(wrapper.state('sortByValue')).toEqual('release_date');
  });

  it('check default state to be equal to "release_date" on sort filters component', () => {
    const wrapper = shallow(<SortFilters onFiltersApply={onFiltersApply} />);
    expect(wrapper.state('sortByValue')).toEqual('release_date');
  });

  it('simulate filter click on sort filters component', () => {
    let k = 1;
    const onFiltersApplyFunc = () => k = k + 1;
    const wrapper = shallow(<SortFilters onFiltersApply={onFiltersApplyFunc} />);
    expect(k).toEqual(2);
    wrapper.find({ id: 'release_date' }).simulate('click');
    expect(k).toEqual(3);
  });
});
