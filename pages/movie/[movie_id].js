import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MovieDetail from "../../components/movies/MovieDetail/MovieDetail";
import MovieLayout from "../../components/layouts/Movie";
import { API_URL } from "../../config"

const MoviePage = () => {
  const router = useRouter();
  const { movie_id } = router.query;
  const [movie, setMovie] = useState([]);
  const [comments, setMovieComments] = useState([]);
  useEffect(() => {
    if (!movie_id) {
      return;
    }
    fetch(`${API_URL}/movies/${movie_id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.item);
        setMovieComments(data.comments);
      });
  }, [movie_id]);

  return (
    <MovieLayout title="Movie" items={[{
      title: "Home",
      url: "/"
    },{
      title: "Movies",
      url: "/movies"
    },{
      title: movie ? movie.title : ""
    }]}>
      <MovieDetail movie={movie} comments={comments} />
    </MovieLayout>
  );
};

export default MoviePage;
