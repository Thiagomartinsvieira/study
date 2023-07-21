import { createSlice } from "@reduxjs/toolkit";

const initialSatate = {
    user: null,
}

export const userSlice = createSlice({
    name: 'user', 
    initialSatate,
    reducers: {
        createUser: (state, action) => {
            console.log(state)

            return {...state}
        }
    }
})

export const { createUser } = userSlice.actions

export default userSlice.reducer