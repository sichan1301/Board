import {createSlice} from "@reduxjs/toolkit";

export interface IData{
    id:string,
    created_date:number,
    name:string,
    title:string,
    content:string,
    category:string
  }

interface IState {
    posts: IData[];
}

const board = createSlice({
    name:"boardData",
    initialState:{
        posts:[]
    },
    reducers:{
        ADD: (state:IState,action) => {
            state.posts.push(action.payload)
            state.posts=state.posts.reverse()
        },
        DELETE: (state:IState,action) =>{
            state.posts = state.posts.filter((item:IData)=>(item.id !== action.payload))
        },
        UPDATE: (state:IState,action:{type:string,payload:IData}) => {
            const index = state.posts.findIndex((item:IData) => item.id === action.payload.id);
            state.posts[index] = action.payload;
            
            // const index = state.posts.findIndex((item:IData) => item.id === action.payload.id);
            // state.posts.forEach((item:IData) => {if(item.id === action.payload.id){state.posts.splice(index,1,action.payload)}} )

            // state.posts = state.posts.map((item:IData) => item.id === action.payload.id ? action.payload : item)
        }
    }
})

export const {ADD, DELETE, UPDATE} = board.actions

export default board;