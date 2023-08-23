import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import photoService from '../services/photoService'

const initialState = {
  photos: [],
  photo: {},
  error: false,
  sucess: false,
  message: null,
}

//publish user photo
export const publishPhoto = createAsyncThunk(
  'photo/publish',
  async (photo, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.publishPhoto(photo, token)

    //check for erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.erros[0])
    }

    return data
  }
)

// Get user photos
export const getUserPhotos = createAsyncThunk(
  'photo/userPhotos',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.getUserPhotos(id, token)

    return data
  }
)

// Delete a photo
export const deletePhoto = createAsyncThunk(
  'photo/delete',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.updatephoto(id, token)

    //check for erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.erros[0])
    }

    return data
  }
)

// Update a photo
export const updatePhoto = createAsyncThunk(
  'photo/update',
  async (photoData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.deletePhoto(
      { title: photoData.title },
      photoData.id,
      token
    )

    //check for erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.erros[0])
    }

    return data
  }
)

// Get photo by id
export const getPhoto = createAsyncThunk(
  'photo/getPhoto',
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.getPhoto(id, token)

    return data
  }
)

// Like a photo
export const like = createAsyncThunk('photo/like', async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token

  const data = await photoService.like(id, token)

  //check for erros
  if (data.errors) {
    return thunkAPI.rejectWithValue(data.erros[0])
  }

  return data
})

// Add comments to a photo
export const comment = createAsyncThunk(
  'foto/comment',
  async (photoData, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token

    const data = await photoService.comment(
      { comment: photoData.comment },
      photoData.id,
      token
    )

    //check for erros
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.erros[0])
    }

    return data
  }
)

export const getPhotos = createAsyncThunk('photo/getall', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token

  const data = await photoService.getPhotos(token)

  return data
})

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photo = action.payload
        state.photos.unshift(state.photo)
        state.message = 'Foto publicada com sucesso!'
      })
      .addCase(publishPhoto.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.photo = {}
      })
      .addCase(getUserPhotos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUserPhotos.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photos = action.payload
      })
      .addCase(publishPhoto.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(publishPhoto.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photo = action.payload
        state.photos.unshift(state.photo)
        state.message = 'Foto publicada com sucesso!'
      })
      .addCase(deletePhoto.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photos = state.photos.filter((photo) => {
          return photo._id !== action.payload.id
        })

        state.message = action.payload.message
      })
      .addCase(deletePhoto.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.photo = {}
      })
      .addCase(updatePhoto.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(updatePhoto.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null

        state.photos.map((photo) => {
          if (photo._id === action.payload.photo._id) {
            return (photo.title = action.payload.photo.title)
          }
          return photo
        })

        state.message = action.payload.message
      })
      .addCase(updatePhoto.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
        state.photo = {}
      })
      .addCase(getPhoto.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photo = action.payload
      })
      .addCase(like.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null

        if (state.photo.likes) {
          state.photo.likes.push(action.payload.userID)
        }

        state.photos.map((photo) => {
          if (photo._id === action.payload.photoID) {
            return photo.likes.push(action.payload.userID)
          }
          return photo
        })

        state.message = action.payload.message
      })
      .addCase(like.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(comment.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null

        state.photo.comments.push(action.payload.comment)

        state.message = action.payload.message
      })
      .addCase(comment.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getPhotos.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.error = null
        state.photos = action.payload
      })
  },
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer
