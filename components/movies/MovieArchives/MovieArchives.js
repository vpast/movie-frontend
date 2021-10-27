import { useState, useEffect } from "react";
import MoviePagination from "../MoviePagination";
import MovieCard from "../MovieCard";
import MovieLayout from "../../layouts/Movie";
import { API_URL } from "../../../config";
import MovieArchivesFilter from "../MovieArchives/MovieArchivesFilter";

const PAGE_LIMIT = 10;
const MovieArchives = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    const queryParams = [
      `skip=${(activePage - 1) * PAGE_LIMIT}`,
      `limit=${PAGE_LIMIT}`,
    ];

    fetch(`${API_URL}/movies?archive=true&${queryParams.join("&")}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
        setPages(Math.ceil(data.count / PAGE_LIMIT));
      });
  }, [activePage]);
  return (
    <MovieLayout
      title="Archives"
      items={[
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Movies",
          url: "/movies",
        },
        {
          title: "Archives",
        },
      ]}
    >
      <section className="section-long">
        <div className="container">
          <MovieArchivesFilter />
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
    </MovieLayout>
  );
};

export default MovieArchives;
