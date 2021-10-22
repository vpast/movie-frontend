const MovieSynopsis = ({movie}) => {
  return (
    <div className="section-line">
      <div className="section-head">
        <h2 className="section-title text-uppercase">Synopsis</h2>
      </div>
      <div className="section-description">
        <p className="lead">
         {!!movie && !!movie.fullplot ? movie.fullplot : movie.plot}
        </p>
      </div>
      <div className="section-bottom">
        <div className="row">
          <div className="mr-auto col-auto">
            <div className="entity-links">
              <div className="entity-list-title">Share:</div>
              <a className="content-link entity-share-link" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="content-link entity-share-link" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="content-link entity-share-link" href="#">
                <i className="fab fa-google-plus-g" />
              </a>
              <a className="content-link entity-share-link" href="#">
                <i className="fab fa-pinterest-p" />
              </a>
              <a className="content-link entity-share-link" href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSynopsis;
