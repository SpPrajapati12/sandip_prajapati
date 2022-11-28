import { configureStore } from "@reduxjs/toolkit";
import UserListSlice from "./UserListSlice";


export const store = configureStore({
  reducer: {
    users : UserListSlice
  },
} );
