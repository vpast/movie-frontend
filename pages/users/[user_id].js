import {useRouter} from "next/router"
import {useState, useEffect} from "react"
import Link from "next/link"
import MainLayout from "../../components/layouts/Main"
import Post from "../../components/cards/Post"
import Avatar from "../../components/users/Avatar"

const UserPage = () => {
  const router = useRouter()
  const {user_id} = router.query
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    if (!user_id) {
      return
    }
    fetch(`http://localhost:3001/users/${user_id}`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data.item)
    })
    fetch(`http://localhost:3001/posts?userId=${user_id}`)
    .then((res) => res.json())
    .then((data) => {
      setPosts(data.items)
    })
  }, [user_id])
  return (
    <MainLayout>
      {!!user && (
      <div className="row">
        <div className="col-md-4 mb-3">
          <Avatar item={user} />
        </div>
      </div>
      )}
      <div className="row">
        {posts.map((post) => {
          return (
            <div className="col-md-6 mb-3" key={post.id}>
              <Post item={post} link={`/posts/${post.id}`} />
            </div>
          )
        })}
      </div>
    </MainLayout>
  )
}

export default UserPage