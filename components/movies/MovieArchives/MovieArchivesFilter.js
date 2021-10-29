import { useRouter } from "next/router";

const years = [];
for (let year = 2016; year >= 1900; year--) {
  years.push(year);
}

const MovieArchivesFilter = ({start_year, end_year}) => {
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
                      router.push(`/archives?start_year=${e.target.value}&end_year=${end_year}`);
                    }}
                    value={start_year}
                  >
                    {years.filter((year) => year<=end_year).map((year) => {
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
                      router.push(`/archives?start_year=${start_year}&end_year=${e.target.value}`);
                    }}
                    value={end_year}
                  >
                    {years.filter((year) => year>=start_year).map((year) => {
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
