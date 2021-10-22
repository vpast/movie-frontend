import { formattedDate } from "../../helpers/date";

const MovieComments = ({ comments }) => {
  return (
    <div>
      <div className="section-line">
        {!!comments.length && (
          <div className="section-head">
            <h2 className="section-title text-uppercase">Comments</h2>
          </div>
        )}
        {!!comments.length && (
          <>
            {comments.map((comment) => {
              return (
                <div className="comment-entity" key={comment._id}>
                  <div className="entity-inner">
                    <div className="entity-content">
                      <p className="entity-subtext">
                        {formattedDate(comment.date)}
                      </p>
                      <h4 className="entity-title">{comment.name}</h4>
                      <p className="entity-text">{comment.text}</p>
                    </div>
                    <div className="entity-extra">
                      <div className="grid-md row">
                        <div className="ml-sm-auto col-auto">
                          <a className="content-link" href="#">
                            <i className="fas fa-reply" />
                            &nbsp;&nbsp;reply
                          </a>
                        </div>
                        <div className="col-auto">
                          <a className="content-link" href="#">
                            <i className="fas fa-quote-left" />
                            &nbsp;&nbsp;quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="section-line">
        <div className="section-head">
          <h2 className="section-title text-uppercase">Add comment</h2>
        </div>
        <form autoComplete="off">
          <div className="row form-grid">
            <div className="col-12 col-sm-6">
              <div className="input-view-flat input-group">
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="input-view-flat input-group">
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="input-view-flat input-group">
                <textarea
                  className="form-control"
                  name="review"
                  placeholder="Add your review"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="rating-line">
                <label>Rating:</label>
                <div className="form-rating" name="rating">
                  <input
                    type="radio"
                    id="rating-10"
                    name="rating"
                    defaultValue={10}
                  />
                  <label htmlFor="rating-10">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-9"
                    name="rating"
                    defaultValue={9}
                  />
                  <label htmlFor="rating-9">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-8"
                    name="rating"
                    defaultValue={8}
                  />
                  <label htmlFor="rating-8">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-7"
                    name="rating"
                    defaultValue={7}
                  />
                  <label htmlFor="rating-7">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-6"
                    name="rating"
                    defaultValue={6}
                  />
                  <label htmlFor="rating-6">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-5"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-4"
                    name="rating"
                    defaultValue={4}
                  />
                  <label htmlFor="rating-4">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-3"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-2"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                  <input
                    type="radio"
                    id="rating-1"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <span className="rating-active-icon">
                      <i className="fas fa-star" />
                    </span>
                    <span className="rating-icon">
                      <i className="far fa-star" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <button className="px-5 btn btn-theme" type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieComments;
