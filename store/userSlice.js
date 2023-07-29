import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  userState: {},
  photos:{loadedAt:"",
  data:[]}
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserState(state, action) {
      state.userState = action.payload;
    },
    setPhotos(state,action){
      state.photos ={loadedAt:new Date.now(),data:[action.payload]};
    }
  },
 

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { setUserState,setPhotos } = userSlice.actions;
export const photoData =(state)=>state.user.photos;
export const selectUserState = (state) => state.user.userState;

export default userSlice.reducer;