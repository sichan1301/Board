import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isCreate:boolean
}

const isCreate = createSlice({
    name: "isCreate",
    initialState:{isCreate:true},
    reducers:{
        TOGGLE: (state:IState,action) => {
            state.isCreate = action.payload
        }
    }
})

export const {TOGGLE} = isCreate.actions

export default isCreate