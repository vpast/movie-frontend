import Link from "next/link"

const MovieFooter = () => {
  return (
    <footer className="section-text-white footer footer-links bg-darken">
      <div className="footer-body container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <a className="footer-logo" href="./">
              <span className="logo-element">
                <span className="logo-tape">
                  <span
                    className="svg-content svg-fill-theme"
                    data-svg="./images/svg/logo-part.svg"
                  />
                </span>
                <span className="logo-text text-uppercase">
                  <span>M</span>emico
                </span>
              </span>
            </a>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5 className="footer-title text-uppercase">Movies</h5>
            <ul className="list-unstyled list-wide footer-content">
              <li>
                <Link href="/movies">
                  <a className="content-link">
                    All Movies
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="container">
          Copyright 2019 © AmigosThemes. All rights reserved.
          Redesigned by <a href="https://github.com/vpast" className="content-link">Vpast</a>
        </div>
      </div>
    </footer>
  );
};

export default MovieFooter;
