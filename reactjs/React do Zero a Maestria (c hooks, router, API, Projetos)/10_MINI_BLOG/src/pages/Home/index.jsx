import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  const [query, setQuery] = useState('')
  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={StyleSheet.home}>
      <h1>see our most recent posts</h1>
      <form onSubmit={handleSubmit} className="search_form">
        <input
          type="text"
          placeholder="or search by tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Search</button>
      </form>
      <div>
        <h1>Posts...</h1>
        {posts && posts.length === 0 && (
          <div className={StyleSheet.noposts}>
            <p>No posts found</p>
            <Link to="/posts/create" className="btn">
              Create first Post
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
