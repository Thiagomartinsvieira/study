import styles from './Dashboard.module.css'
import { useAuthValue } from '../../contexts/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.id

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid)

  const deleteDocument = (id) => { }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>manage your posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.nopost}>
          <p>No posts found</p>
          <Link to="/posts/create">Create First Post</Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Title</span>
            <span>acyion</span>
          </div>

          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    See
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default Dashboard
