import { useRouter } from 'next/router';
import { useState } from 'react';

const years = [];
for (let year = 2016; year >= 1900; year--) {
  years.push(year);
}

const genres = [
  {
    value: 'Action',
  },
  {
    value: 'Adventure',
  },
  {
    value: 'Animation',
  },
  {
    value: 'Biography',
  },
  {
    value: 'Comedy',
  },
  {
    value: 'Crime',
  },
  {
    value: 'Documentary',
  },
  {
    value: 'Drama',
  },
  {
    value: 'Fantasy',
  },
  {
    value: 'Family',
  },
  {
    value: 'Romance',
  },
  {
    value: 'Thriller',
  },
  {
    value: 'Sport',
  },
  {
    value: 'Short',
  },
  {
    value: 'History',
  },
  {
    value: 'Horror',
  },
  {
    value: 'Music',
  },
  {
    value: 'Musical',
  },
  {
    value: 'Mystery',
  },
  {
    value: 'Sci-Fi',
  },
  {
    value: 'War',
  },
  {
    value: 'Western',
  },
];

const MovieFilter = (props) => {
  const router = useRouter();
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const genreChangeHandler = (event) => {
    setSelectedGenre(event.target.value);
  };

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filterChangeHandler = () => {
    if (selectedGenre === '') {
      router.push(`/movies?year=${selectedYear}`);
    } else if (selectedYear === '') {
      router.push(`/movies?genre=${selectedGenre}`);
    } else {
      router.push(`/movies?genre=${selectedGenre}&year=${selectedYear}`);
    }
    props.onChangeHandler(true);
  };

  return (
    <div className='section-pannel'>
      <div className='grid row'>
        <div className='col-md-10'>
          <form autoComplete='off'>
            <div className='row form-grid'>
              <div className='col-sm-6 col-lg-3'>
                <div className='input-view-flat input-group'>
                  <select
                    className='form-control'
                    name='genre'
                    onChange={genreChangeHandler}
                  >
                    <option value=''>genre</option>
                    {genres.map((data, index) => {
                      return (
                        <option key={index} value={data.value}>
                          {data.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3'>
                <div className='input-view-flat input-group'>
                  <select
                    className='form-control'
                    name='year'
                    onChange={yearChangeHandler}
                  >
                    <option value=''>year</option>
                    {years.map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3'>
                <div className='input-view-flat input-group'>
                  <button
                    className='form-control'
                    type='button'
                    onClick={filterChangeHandler}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
