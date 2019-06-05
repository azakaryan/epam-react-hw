import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import SearchFilters from './search-filters';

expectEnzymify.extend(enzymify());

const onFiltersApply = () => {};

describe('Search Filters Component', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchFilters onFiltersApply={onFiltersApply} />);

    expect(component).toMatchSnapshot();
  });

  it('renders a search filters component', () => {
    const wrapper = shallow(<SearchFilters onFiltersApply={onFiltersApply} />);
    expectEnzymify(wrapper).toBeA('div');
  });

  it('set state on search filters component', () => {
    const wrapper = shallow(<SearchFilters onFiltersApply={onFiltersApply} />);
    const titleEl = wrapper.find({ id: 'title' });
    const genreEl = wrapper.find({ id: 'genre' });

    titleEl.simulate('click');
    expect(wrapper.state('searchBy')).toEqual('title');
    titleEl.simulate('click');
    expect(wrapper.state('searchBy')).toEqual('');

    genreEl.simulate('click');
    expect(wrapper.state('searchBy')).toEqual('genres');
    genreEl.simulate('click');
    expect(wrapper.state('searchBy')).toEqual('');
  });

  it('check default state of "search" to be equal to "" on search filters component', () => {
    const wrapper = shallow(<SearchFilters onFiltersApply={onFiltersApply} />);
    expect(wrapper.state('search')).toEqual('');
  });
  it('check default state of "searchBy" to be equal to "" on search filters component', () => {
    const wrapper = shallow(<SearchFilters onFiltersApply={onFiltersApply} />);
    expect(wrapper.state('searchBy')).toEqual('');
  });

  it('simulate filter click on search filters component', () => {
    let k = 1;
    const onFiltersApplyFunc = () => k = k + 1;
    const wrapper = shallow(<SearchFilters onFiltersApply={onFiltersApplyFunc} />);
    expect(k).toEqual(1);

    wrapper.find({ id: 'title' }).simulate('click');
    expect(k).toEqual(1);
    wrapper.find({ id: 'title' }).simulate('click');
    expect(k).toEqual(1);
    wrapper.find({ id: 'genre' }).simulate('click');
    expect(k).toEqual(1);
    wrapper.find({ id: 'apply-search' }).simulate('click');
    expect(k).toEqual(2);
  });

  it('simulate filter input fill on search filters component', () => {
    let k = 1;
    const onFiltersApplyFunc = () => k = k + 1;
    const wrapper = shallow(<SearchFilters onFiltersApply={onFiltersApplyFunc} />);
    wrapper.find({ id: 'search-text' }).simulate('change', { target: { value: 'hello' } });
    expect(k).toEqual(1);
  });
});
