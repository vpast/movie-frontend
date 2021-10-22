import { useState, useEffect } from "react";
import MovieLayout from "../components/layouts/Movie";
import MovieCard from "../components/movies/MovieCard";
import MovieFilter from "../components/movies/MovieFilter";
import MoviePagination from "../components/movies/MoviePagination";
import { useRouter } from "next/router"
import { API_URL } from "../config"

const PAGE_LIMIT = 10;
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(1);
  const router = useRouter();
  const {genre, year} = router.query;

  useEffect(() => {
    const queryParams = [
      `skip=${(activePage - 1) * PAGE_LIMIT}`,
      `limit=${PAGE_LIMIT}`,
    ];
    if (!!genre) {
      queryParams.push(`genre=${genre}`)
    }
    if (!!year) {
      queryParams.push(`year=${year}`)
    }

    fetch(`${API_URL}/movies?${queryParams.join("&")}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setPages(Math.ceil(data.count / PAGE_LIMIT));
      });
  }, [activePage, genre, year]);
  return (
    <MovieLayout title="Movies List" items={[{
      title: "Home",
      url: "/"
    },{
      title: "Movies"
    }]}>
      <section className="section-long">
        <div className="container">
          <MovieFilter />
          <MoviePagination
            activePage={activePage}
            setActivePage={setActivePage}
            pages={pages}
          />
          {movies.map((item) => {
            return <MovieCard item={item} key={item._id} />;
          })}
          <MoviePagination
            activePage={activePage}
            setActivePage={setActivePage}
            pages={pages}
          />
        </div>
      </section>
      <a className="scroll-top disabled" href="#">
        <i className="fas fa-angle-up" aria-hidden="true" />
      </a>
    </MovieLayout>
  );
};

export default Movies;
