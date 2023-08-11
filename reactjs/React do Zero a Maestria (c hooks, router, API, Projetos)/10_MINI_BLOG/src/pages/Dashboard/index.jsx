import styles from './Dashboard.module.css'
import { useAuthValue } from '../../contexts/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.id

  const posts = []

  return (
    <div>
      <h2>Dashboard</h2>
      <p>manage your posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.nopost}>
          <p>No posts found</p>
          <Link to="/posts/create">Create First Post</Link>
        </div>
      ) : (
        <div>
          <p>Have Post</p>
        </div>
      )}
    </div>
  )
}

export default Dashboard
