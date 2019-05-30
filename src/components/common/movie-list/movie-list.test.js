import React from 'react';
import { shallow } from 'enzyme';

import { default as expect_enzymify } from 'expect';
import enzymify from 'expect-enzyme';
import MovieList from './movie-list';

expect_enzymify.extend(enzymify());


const movies = [{
  budget: 160000000,
  genres: ['Action', 'Thriller', 'Science Fiction', 'Mystery', 'Adventure'],
  id: 27205,
  overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
  poster_path: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
  release_date: '2010-07-14',
  revenue: 825532764,
  runtime: 148,
  tagline: 'Your mind is the scene of the crime.',
  title: 'Inception',
  vote_average: 8.2,
  vote_count: 16798,
}];


describe('MovieList Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MovieList debug />);

    expect(component).toMatchSnapshot();
  });

  it('renders a MovieList element', () => {
    const wrapper = shallow(<MovieList />);
    // TODO how to use expect for both cases.
    expect_enzymify(wrapper).toBeA('div');
  });

  it('should render movies correctly with given data', () => {
    const component = shallow(<MovieList movies={movies} />);
    expect(component).toMatchSnapshot();
  });
});
