import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../components/layouts/Main";
import Toast from "../../components/comments/Toast";
import ArticleCard from "../../components/cards/Article";

const PostPage = () => {
  const router = useRouter();
  const { post_id } = router.query;
  const [user, setUser] = useState(null);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (!post_id) {
      return;
    }
    fetch(`http://localhost:3001/posts/${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data.item);
        fetch(`http://localhost:3001/users/${data.item.userId}`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data.item);
          });
      });
    fetch(`http://localhost:3001/comments?postId=${post_id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.items);
      });
  }, [post_id]);
  return (
    <MainLayout>
      {!!post && (
        <div className="row">
          <div className="col-md-4 mb-3">
            {!!user && (
              <ArticleCard
                item={post}
                user={user}
                userLink={`/users/${user.id}`}
              />
            )}
          </div>
          <div className="col-md-8">
            {comments.map((comment) => {
              return <Toast item={comment} key={comment.id} />;
            })}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default PostPage;
