import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsersList = createAsyncThunk("users/get_users_list", async () => {
  try {
    const response = await axios.get(`https://dummyjson.com/users?limit=100&select=firstName,lastName,email,image`);
    return response.data;
  } catch (err) {
    console.log(err)
  }
});

const initialState = {
  users: [],
  loading: null
}

const usersList = createSlice({
  name: "users",
  initialState,
  reducers: {
    hideshow(state, action) {
      state.hide = action.payload
    },
    handlelogin(state,action) {
      state.loading=action.payload
    }

  },
  extraReducers: (builder) => {

    builder.addCase(getUsersList.pending, (state, action) => {
      state.loading = false
    })
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false
    })
    builder.addCase(getUsersList.rejected, (state, action) => {
      state.loading = false
    })

    // [getUsersList.pending]: (state) => {
    //   // state.loading = false
    // },
    // [getUsersList.fulfilled]: (state, action) => {
    //   return { ...state, users: action.payload, loading : false};
    // },
    // [getUsersList.rejected]: (state) => {
    //   state.loading =false
    // },
  },
});
export const { hideshow ,handlelogin} = usersList.actions
export default usersList.reducer