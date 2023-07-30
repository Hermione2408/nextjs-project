import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
import moment from "moment"
const initialState = {
  userState: {
    loadedAt:'',
    data:{
      "id": "eXEoGifqQY4",
      "updated_at": "2023-07-30T10:05:42Z",
      "username": "hermione_dadheech",
      "name": "Hermione Dadheech",
      "first_name": "Hermione",
      "last_name": "Dadheech",
      "twitter_username": null,
      "portfolio_url": "https://www.youtube.com/@wolfgang_hasselmann/videos",
      "bio": "I am a photographer and enjoy my hobby.\r\nI like to share my pictures for free, but if you feel you would like to donate, do it not to me but to:  Médecins Sans Frontières   https://www.msf.org/donate  \r\n",
      "location": "Germany ",
      "links": {
          "self": "https://api.unsplash.com/users/wolfgang_hasselmann",
          "html": "https://unsplash.com/@wolfgang_hasselmann",
          "photos": "https://api.unsplash.com/users/wolfgang_hasselmann/photos",
          "likes": "https://api.unsplash.com/users/wolfgang_hasselmann/likes",
          "portfolio": "https://api.unsplash.com/users/wolfgang_hasselmann/portfolio",
          "following": "https://api.unsplash.com/users/wolfgang_hasselmann/following",
          "followers": "https://api.unsplash.com/users/wolfgang_hasselmann/followers"
      },
      "profile_image": {
          "small": "https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          "medium": "https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          "large": "https://images.unsplash.com/profile-1516997253075-2a25da8007e7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
      },
      "instagram_username": null,
      "total_collections": 75,
      "total_likes": 12577,
      "total_photos": 15437,
      "accepted_tos": true,
      "for_hire": false,
      "social": {
          "instagram_username": null,
          "portfolio_url": "https://www.youtube.com/@wolfgang_hasselmann/videos",
          "twitter_username": null,
          "paypal_email": null
      }
  }
  },
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
  return response.data;
});

export const fetchSelfDetails = createAsyncThunk('user/selfDetails',async(type,{getState})=>{
  const {loadedAt,data} = getState().user.userState;
  const response = await axios.get('https://api.unsplash.com/users/hermione_2408',{
    headers:{
      Authorization: `Client ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    }
  });
  if (response.status !== 200) {
    throw new Error('Failed to fetch photos');
  }
  console.log(response.data,"RESP")
  return response.data;
})
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
    },
    [fetchSelfDetails.fulfilled]:(state,action)=>{
      return{
        ...state,
        userState:{loadedAt:Date.now(),data:action.payload}
      }
    }
  },
});

export const { setUserState,setPhotos } = userSlice.actions;
export const photoData =(state)=>state.user.photos;
export const selectUserState = (state) => state.user.userState;

export default userSlice.reducer;