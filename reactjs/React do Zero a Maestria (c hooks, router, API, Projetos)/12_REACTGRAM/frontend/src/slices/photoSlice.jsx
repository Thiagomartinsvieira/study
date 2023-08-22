import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import photoService from '../services/photoServices'

const initialState = {
  photos: [],
  photo: {},
  error: false,
  sucess: false,
  message: null,
}

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null
    },
  },
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer
