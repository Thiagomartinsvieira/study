import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../contexts/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [formError, setFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.CreatePost}>
      <h2>Create Post</h2>
      <p>write your thoughts and share</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="start with a brief description"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL for image:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="insert an image for your post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>content:</span>
          <textarea
            name="body"
            required
            placeholder="enter post content"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="enter tags separated by comma"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className="btn">Register</button>
        {/* {!loading && <button className="btn">Register</button>}
        {loading && (
          <button className="btn" disabled>
            wait!...
          </button>
        )}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost
