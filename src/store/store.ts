import { configureStore} from "@reduxjs/toolkit";
import board from "./board";
import isCreate from "./isCreate";

const store = configureStore({
    reducer : {
        board : board.reducer,
        isCreate : isCreate.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;

