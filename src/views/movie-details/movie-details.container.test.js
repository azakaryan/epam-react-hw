import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieDetails, { mapDispatchToProps } from './movie-details.container';

expectEnzymify.extend(enzymify());
const onLoad = () => {};

describe('MovieDetails Container Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieDetails onLoad={onLoad} />);
    expect(component).toMatchSnapshot();
  });

  it('should not dispatch an action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onLoad();
    expect(dispatch.mock.calls[0][0]()).toBeTruthy;
  });
});