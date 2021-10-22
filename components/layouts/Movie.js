import MovieFooter from "../movies/MovieFooter";
import MovieHead from "../movies/MovieHead";
import MovieHeader from "../movies/MovieHeader";
import MovieNavigator from "../movies/MovieNavigator";

const MovieLayout = ({children, title, items}) => {
  return (
    <>
      <MovieHead />
      <MovieHeader />
      <MovieNavigator title={title} items={items}/>
      {children}
      <a className="scroll-top disabled" href="#">
        <i className="fas fa-angle-up" aria-hidden="true" />
      </a>
      <MovieFooter />
    </>
  );
};

export default MovieLayout;
