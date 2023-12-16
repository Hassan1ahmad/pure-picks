import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
    loading: false,
}

const apislice = createSlice({
    name : 'api',
    initialState,
    reducers:{
        fetchproducts(state,action){
            state.data =action.payload.data;
            state.loading = action.payload.loading;

        }
    }

})

export const {fetchproducts} = apislice.actions
export default apislice.reducer

export function getproducts(productId){
    return async function getproductsthunk(dispatch,getstate){
        const URL = `https://fakestoreapi.com/${productId}`
        dispatch(fetchproducts({ data: [], loading: true }));
        const data =await fetch(URL)
        const json= await data.json()
        dispatch(fetchproducts({ data: json, loading: false }));    }
}