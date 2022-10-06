import { useRouter } from 'next/router';
import { useState } from 'react';

const years = [];
for (let year = 2016; year >= 1900; year--) {
  years.push(year);
}

const genres = [
  {
    value: 'genre',
  },
  {
    value: 'Action',
  },
  {
    value: 'Adventure',
  },
  {
    value: 'Comedy',
  },
  {
    value: 'Crime',
  },
  {
    value: 'Detective',
  },
  {
    value: 'Drama',
  },
  {
    value: 'Fantasy',
  },
  {
    value: 'Melodrama',
  },
  {
    value: 'Romance',
  },
  {
    value: 'Superhero',
  },
  {
    value: 'Supernatural',
  },
  {
    value: 'Thriller',
  },
  {
    value: 'Sport',
  },
  {
    value: 'Historical',
  },
  {
    value: 'Musical',
  },
  {
    value: 'Sci-fi',
  },
  {
    value: 'War',
  },
  {
    value: 'Western',
  },
];

const MovieFilter = () => {
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
              <button type='button' onClick={filterChangeHandler}>
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
