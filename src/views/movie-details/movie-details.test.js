import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieDetails from './movie-details';

expectEnzymify.extend(enzymify());
const onLoad = () => {};
const match = {
  params: { id: 12 },
};

describe('Movie Home Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieDetails onLoad={onLoad} match={match} />);
    expect(component).toMatchSnapshot();
  });

  it('renders a Movie Home component', () => {
    const wrapper = shallow(<MovieDetails onLoad={onLoad} match={match} />);
    expectEnzymify(wrapper).toBeA('div');
  });

  it('pass id when load element', () => {
    let _id = 0;
    const onLoad = (id) => _id = id;
    expect(_id).toEqual(0);
    const wrapper = shallow(<MovieDetails onLoad={onLoad} match={match} />);
    expect(_id).toEqual(12);
    wrapper.setProps({ match });
    expect(_id).toEqual(12);

    wrapper.setProps({ match: { params: { id: 15 } } });
    expect(_id).toEqual(15);
  });

  it('find element, test goHome functionality', () => {
    let url = 'movie-details';
    const history = {
      push: () => {
        url = '/';
      },
    };
    const wrapper = shallow(<MovieDetails onLoad={onLoad} match={match} history={history} />);
    const btn = wrapper.find({ id: 'search-btn'});
    expectEnzymify(btn).toBeA(Button);

    btn.simulate('click');
    expect(url).toEqual('/');
  });
});
