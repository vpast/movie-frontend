import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { formattedDate } from '../../helpers/date';
import Link from 'next/link';
import { API_URL } from '../../../config';

const MovieSidebar = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const { movie_id } = router.query;

  useEffect(() => {
    if (!movie_id) {
      return;
    }
    fetch(`${API_URL}/movies?similar=${movie_id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, [movie_id]);

  return (
    <div className='sidebar section-long order-lg-last'>
      <section className='section-sidebar'>
        <div className='section-head'>
          <h2 className='section-title text-uppercase'>Similar movies</h2>
        </div>
        {movies.map((movie) => {
          return (
            <div className='movie-short-line-entity' key={movie._id}>
              <Link href={`/movie/${movie._id}`}>
                <a className='entity-preview'>
                  {!!movie.poster && (
                    <img
                      className='w-100'
                      src={movie.poster}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = 'https://i.imgur.com/ymQdKor.jpg';
                      }}
                    />
                  )}
                  {!movie.poster && (
                    <img
                      className='w-100'
                      src='https://i.imgur.com/ymQdKor.jpg'
                    />
                  )}
                </a>
              </Link>
              <div className='entity-content'>
                <h4 className='entity-title'>
                  <Link href={`/movie/${movie._id}`}>
                    <a className='content-link'>{movie.title}</a>
                  </Link>
                </h4>
                <p className='entity-subtext'>
                  {formattedDate(movie.released)}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <section className='section-sidebar'>
        <div className='section-head'>
          <h2 className='section-title text-uppercase'>Archive</h2>
        </div>
        <ul className='list-unstyled list-wider list-categories'>
          <li>
            <Link href={`/archives`}>
              <a className='content-link text-uppercase'>2000-2016</a>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MovieSidebar;
