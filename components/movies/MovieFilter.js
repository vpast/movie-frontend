import { useRouter } from "next/router"

const years = []
for (let year = 2016; year>=1900; year--) {
  years.push(year)
}

const MovieFilter = () => {
  const router = useRouter();
  return(
    <div className="section-pannel">
    <div className="grid row">
      <div className="col-md-10">
        <form autoComplete="off">
          <div className="row form-grid">
            <div className="col-sm-6 col-lg-3">
              <div className="input-view-flat input-group">
                <select className="form-control" name="genre">
                  <option >genre</option>
                  <option>action</option>
                  <option>adventure</option>
                  <option>comedy</option>
                  <option>crime</option>
                  <option>detective</option>
                  <option>drama</option>
                  <option>fantasy</option>
                  <option>melodrama</option>
                  <option>romance</option>
                  <option>superhero</option>
                  <option>supernatural</option>
                  <option>thriller</option>
                  <option>sport</option>
                  <option>historical</option>
                  <option>horror</option>
                  <option>musical</option>
                  <option>sci-fi</option>
                  <option>war</option>
                  <option>western</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
            <div className="input-view-flat input-group">
                <select className="form-control" name="year" onChange={(e) => {
                  router.push(`/movies?year=${e.target.value}`)
                }}>
                  <option value="">year</option>
                  {years.map((year) => {
                    return <option key={year} value={year}>{year}</option>
                  })}
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="input-view-flat input-group">
                <select className="form-control" name="sortBy">
                  <option >sort by</option>
                  <option>name</option>
                  <option>release year</option>
                  <option>rating</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-2 my-md-auto d-flex">
        <span className="info-title d-md-none mr-3">Select view:</span>
        <ul className="ml-md-auto h5 list-inline">
          <li className="list-inline-item">
            <a
              className="content-link transparent-link"
              href="movies-blocks.html"
            >
              <i className="fas fa-th" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="content-link transparent-link active"
              href="movies-list.html"
            >
              <i className="fas fa-th-list" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default MovieFilter