import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const Fetching=createAsyncThunk('Fetch/users',
    async ()=>{
        const result = await axios.get('https://dummyjson.com/users')
        return result.data.users   
    }
  )

 const FetchSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        loading:false,
        error:null
    },
   
    extraReducers:(builder)=>{
        builder
        .addCase(Fetching.pending,(state)=>{
            state.loading=true
        })
        .addCase(Fetching.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload
        })
        .addCase(Fetching.rejected,(state,action)=>{
            state.loading=true;
            state.error=action.error.message
        })
    }  

 })

 export default FetchSlice.reducer;

