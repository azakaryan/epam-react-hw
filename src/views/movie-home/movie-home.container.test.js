import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieHome, { mapDispatchToProps } from './movie-home.container';
import { TypeCheck } from '../../services/utils/type-check';

expectEnzymify.extend(enzymify());
const onLoad = () => {};

describe('MovieHome Container Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieHome onLoad={onLoad} />);
    expect(component).toMatchSnapshot();
  });

  it('should not dispatch an action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onLoad();
    expect(dispatch.mock.calls[0][0]('', () => (new Map([['movies', []]])))).toEqual(undefined);
  });

  it('should dispatch an action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onLoad();
    expect(dispatch.mock.calls[0][0]('', () => (new Map([['movies', [{}, {}]]])))).toEqual(undefined);
  });

  it('should MovieHome has initialAction static method defined', () => {
    expect(TypeCheck.isFunction(MovieHome.initialAction)).toBeTruthy();
  });

  it('call MovieHome has initialAction static method defined', () => {
    expect(TypeCheck.isFunction(MovieHome.initialAction())).toBeTruthy();
  });
});
