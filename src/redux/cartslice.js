import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = [];

const cartslice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addtocart(state , action){
            const newItem = {
                ...action.payload,
                reduxid: uuidv4(),
            };
            state.push(newItem);
        },removefromcart(state,action){
            return state.filter(item=> item.reduxid !== action.payload)
        }
    }
})

export const { addtocart,removefromcart } = cartslice.actions
export default cartslice.reducer