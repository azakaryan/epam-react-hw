import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieCover from './movie-cover';

expectEnzymify.extend(enzymify());
const movie = {
  budget: 160000000,
  genres: ['Action', 'Thriller', 'Science Fiction', 'Mystery', 'Adventure'],
  id: 27205,
  overview:
    "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
  poster_path:
    'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
  release_date: '2010-07-14',
  revenue: 825532764,
  runtime: 148,
  tagline: 'Your mind is the scene of the crime.',
  title: 'Inception',
  vote_average: 8.2,
  vote_count: 16798,
};

describe('Movie Cover Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieCover movie={movie} />);
    expect(component).toMatchSnapshot();
  });

  it('renders a Movie Cover component', () => {
    const wrapper = shallow(<MovieCover movie={movie} />);
    expectEnzymify(wrapper).toBeA('div');
  });

  it('renders empty component', () => {
    const wrapper = shallow(<MovieCover />);
    expect(wrapper).toEqual({});
  });
});
