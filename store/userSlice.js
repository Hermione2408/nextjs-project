import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
import moment from "moment"
const initialState = {
  userState: {},
  photos:{loadedAt:"",
  data:[]}
};

export const fetchPhotos = createAsyncThunk('user/fetchPhotos', async (type, { getState }) => {
  const { loadedAt,data } = getState().user.photos;
  console.log('hey',type)

  if (!type=='refetch' && loadedAt && moment().diff(loadedAt, 'minutes') < 1) {
    return data;
  }

  const response = await axios.get('https://api.unsplash.com/photos/random', {
    params: { count: 10 },
    headers: {
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    }
  });

  if (response.status !== 200) {
    throw new Error('Failed to fetch photos');
  }
  console.log(response.data,"RESP")
  return response.data;
});

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
      console.log(3,action)
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
    [fetchPhotos.fulfilled]:(state,action)=>{
      return{
        ...state,
        photos:{loadedAt: Date.now(), data: [...state.photos.data,...action.payload]}
      }
    }
  },
});

export const { setUserState,setPhotos } = userSlice.actions;
export const photoData =(state)=>state.user.photos;
export const selectUserState = (state) => state.user.userState;

export default userSlice.reducer;