import MovieComments from "./MovieComments";
import MovieGallery from "./MovieGallery";
import MovieInfo from "./MovieInfo";
import MovieSidebar from "./MovieSidebar";
import MovieSynopsis from "./MovieSynopsis";

const MovieDetail = ({movie, comments, movies}) => {
  return (
    <div className="container">
      <div className="sidebar-container">
        <div className="content">
          <section className="section-long">
            <MovieInfo movie={movie} />
            <MovieSynopsis movie={movie} />
            <MovieGallery />
            <MovieComments comments={comments} />
          </section>
        </div>
        <MovieSidebar />
      </div>
    </div>
  );
};

export default MovieDetail;
