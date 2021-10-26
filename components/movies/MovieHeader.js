import Link from "next/link"

const MovieHeader = () => {
  return(
    <header className="header header-horizontal header-view-pannel">
    <div className="container">
      <nav className="navbar">
        <Link href="/">
          <a className="navbar-brand">
            <span className="logo-element">
              <span className="logo-tape">
                <span
                  className="svg-content svg-fill-theme"
                  data-svg="/memico/images/svg/logo-part.svg"
                />
              </span>
              <span className="logo-text text-uppercase">
                <span>M</span>emico
              </span>
            </span>
          </a>
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="th-dots-active-close th-dots th-bars">
            <span />
            <span />
            <span />
          </span>
        </button>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">
                Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href= "/movies">
                <a className="nav-link">
                  Movies
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href= "/archives">
                <a className="nav-link">
                  Archives
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default MovieHeader