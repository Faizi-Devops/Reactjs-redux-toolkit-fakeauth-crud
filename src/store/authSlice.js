import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: { user: null, isLoggedIn: false, error: null, something:"new data" }
}
export const SignUser = createAsyncThunk(
  'auth/SignUser',
  
  async (userDetails,_) => {
    try {
      const response = await axios.post('https://reqres.in/api/login',userDetails);
      
      return response.data;
    } catch (error) {
     throw error.response.data;
    }
  }
);
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    
    async (userDetails,_) => {
      try {
        const response = await axios.post('https://reqres.in/api/register',userDetails);
        
        return response.data;
      } catch (error) {
       throw error.response.data;
      }
    }
  );

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state,action) => {
        
        
        
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
       
       
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        
        
        state.isLoading = false;
        state.error = action.error.message;
      });
      builder
      .addCase(SignUser.pending, (state,action) => {
        
        
        
        state.isLoading = true;
      })
      .addCase(SignUser.fulfilled, (state, action) => {
       
       
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(SignUser.rejected, (state, action) => {
        
        
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
})


export const {  } = authSlice.actions

export default authSlice.reducer;