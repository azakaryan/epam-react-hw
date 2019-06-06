import React from 'react';
import { shallow } from 'enzyme';
import expectEnzymify from 'expect';
import enzymify from 'expect-enzyme';
import MovieItem, { mapStateToProps } from './movie-item.container';
import { TypeCheck } from '../../../services/utils/type-check';

expectEnzymify.extend(enzymify());
const movies = [{
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
}];


describe('Movie Item Container Component', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieItem />);
    expect(component).toMatchSnapshot();
  });

  it('test mapStateToProps', () => {
    const m = mapStateToProps(new Map([['movies', movies]]));
    expect(TypeCheck.isFunction(m.getMovie)).toBeTruthy();

    expect(m.getMovie(27205)).toBeTruthy();
  });
});
