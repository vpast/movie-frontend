import { useState, useEffect } from 'react';
import MovieCard from '../../components/movies/MovieCard';
import { API_URL } from '../../config';

const PAGE_LIMIT = 5;
const minYear = 1910;
const maxYear = 2015;

const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;

const MovieHomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const queryParams = [`limit=${PAGE_LIMIT}`];
    if (!!year) {
      queryParams.push(`year=${year}`);
    }

    fetch(`${API_URL}/movies?${queryParams.join('&')}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, [year]);

  return (
    <>
      <section className='section-long'>
        <div className='container'>
          {movies.map((item) => {
            return <MovieCard item={item} key={item._id} />;
          })}
        </div>
      </section>
      <a className='scroll-top disabled' href='#'>
        <i className='fas fa-angle-up' aria-hidden='true' />
      </a>
    </>
  );
};

export default MovieHomePage;
