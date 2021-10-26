import Link from "next/link";

const MovieCard = (props) => {
  const item = props.item;
  const { title, poster, _id, genres = [], imdb, runtime, plot } = item;
  return (
    <article className="movie-line-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          {!!poster && (
            <img
              className="embed-responsive-item"
              src={poster}
              alt="movie poster"
            />
          )}
        </div>
      </div>
      <div className="entity-content">
        <h4 className="entity-title">
          <a className="content-link" href={`movie/${_id}`}>
            {title}
          </a>
        </h4>
        <div className="entity-category">
          {genres.map((genre, key) => (
            <Link href={`/movies?genre=${genre}`}>
              <a className="content-link" key={key}>
                {genre + (key !== genres.length - 1 ? ", " : "")}{" "}
              </a>
            </Link>
          ))}
        </div>
        <div className="entity-info">
          <div className="info-lines">
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-star" />
              </span>
              <span className="info-text">{imdb.rating}</span>
              <span className="info-rest">/10</span>
            </div>
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-clock" />
              </span>
              <span className="info-text">{runtime}</span>
              <span className="info-rest">&nbsp;min</span>
            </div>
          </div>
        </div>
        <p className="text-short entity-text">{plot}</p>
      </div>
    </article>
  );
};

export default MovieCard;
