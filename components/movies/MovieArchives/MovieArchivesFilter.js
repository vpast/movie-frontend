import { useRouter } from "next/router";

const years = [];
for (let year = 2016; year >= 1900; year--) {
  years.push(year);
}

const MovieArchivesFilter = () => {
  const router = useRouter();
  return (
    <div className="section-pannel">
      <div className="grid row">
        <div className="col-md-10">
          <form autoComplete="off">
            <div className="row form-grid">
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select
                    className="form-control"
                    name="year"
                    onChange={(e) => {
                      router.push(`/movies?year=${e.target.value}`);
                    }}
                  >
                    <option value="">start from year</option>
                    {years.map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select
                    className="form-control"
                    name="year"
                    onChange={(e) => {
                      router.push(`/movies?year=${e.target.value}`);
                    }}
                  >
                    <option value="">end from year</option>
                    {years.map((year) => {
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieArchivesFilter;
