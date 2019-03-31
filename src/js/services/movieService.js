import {of} from 'rxjs';

class MovieService {
    
    constructor() {
        this.movies$ = of(1,2,3)
    }

    getAll() {
        return this.movies$
    }

    getMoviesBy(keyName, value) {
        return this.movies$.pipe(map(movies => movies.filter(m => m[keyName] === value)))
    }
}

export default new MovieService()