import MainLayout from "../components/layouts/Main";
import PostCard from "../components/cards/Post";
import ArticleCard from "../components/cards/Article";
import AboutCard from "../components/cards/About";
import { post, user, comment } from "../data/mock";
import Avatar from "../components/users/Avatar";
import Toast from "../components/comments/Toast";

const Template = () => {
  return (
    <MainLayout>
      <div className="row mb-2">
        <div className="col-md-6">
          <PostCard item={post} link={`/posts/${post.id}`} />
        </div>
        <div className="col-md-6">
          <PostCard item={post} link={`/posts/${post.id}`} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Avatar item={user} link={`/users/${user.id}`}/>
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4">
          <Avatar item={user} link={`/users/${user.id}`} />
        </div>
        {/* /.col-lg-4 */}
        <div className="col-lg-4">
          <Avatar item={user} link={`/users/${user.id}`} />
        </div>
        {/* /.col-lg-4 */}
      </div>

      <div className="row">
        <div className="col-md-8">
          <ArticleCard item={post} user={user} userLink={`/users/${user.id}`} />
          <Toast item={comment} />
          <Toast item={comment} />
          <Toast item={comment} />
          {/* /.blog-post */}
          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary" href="#">
              Older
            </a>
            <a
              className="btn btn-outline-secondary disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Newer
            </a>
          </nav>
        </div>
        <div className="col-md-4">
          <AboutCard />
        </div>
      </div>
      {/* /.row */}
    </MainLayout>
  );
};

export default Template;
