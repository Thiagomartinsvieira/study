import './Profile.css'

import { uploads } from '../../utils/config'

// components

import { Link } from 'react-router-dom'
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// Redux
import { getUserDetails } from '../../slices/userSlice'

const Profile = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { user, loading } = useSelector((state) => state.user)
  const { user: userAuth } = useSelector((state) => state.auth)

  //New form and edit forms refs
  const newPhotoForm = useRef()
  const editPhotoForm = useRef()

  // Load user data
  useEffect(() => {
    dispatch(getUserDetails(id))
  }, [dispatch])

  const submitHandle = (e) => {
    e.preventDefault()
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div id="Profile">
      <div className="profile-header">
        {user.profile && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        )}
        <div className="profile-description">
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      {id === userAuth._id && (
        <>
          <div className="new-photo" ref={newPhotoForm}>
            <h3>Compartilhe algum momento!</h3>
            <form onSubmit={submitHandle}>
              <label>
                <span>Titulo para foto:</span>
                <input type="text" placeholder="Insira um titulo" />
              </label>
              <label>
                <span>Imagem: </span>
                <input type="file" />
              </label>
              <input type="submit" value="Postar" />
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default Profile
