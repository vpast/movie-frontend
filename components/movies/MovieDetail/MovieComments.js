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
    </div>
  );
};

export default MovieComments;
