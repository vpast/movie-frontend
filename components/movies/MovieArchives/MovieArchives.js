import { useState, useEffect } from "react";
import MoviePagination from "../MoviePagination";
import MovieCard from "../MovieCard";
import MovieLayout from "../../layouts/Movie";
import { API_URL } from "../../../config"
import MovieArchivesFilter from "../MovieArchives/MovieArchivesFilter";

const MovieArchives = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/movies?archive=true`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);
  return (
    <MovieLayout title="Archives" items={[{
      title: "Home",
      url: "/"
    },{
      title: "Movies",
      url: "/movies"
    },{
      title: "Archives"
    }]}>
      <section className="section-long">
        <div className="container">
          <MovieArchivesFilter />
          {movies.map((item) => {
            return <MovieCard item={item} key={item._id} />;
          })}
          <MoviePagination />
        </div>
      </section>
    </MovieLayout>
  );
};

export default MovieArchives;
