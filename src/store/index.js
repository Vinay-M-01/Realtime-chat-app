import { createSlice, configureStore } from "@reduxjs/toolkit"; 

const initialState ={
    showDeleteBtn: false,
    id:'',
}

const deleteSlice = createSlice({
    name: "toggleDeleteBtn",
    initialState,
    reducers: {
        toggleDelete(state,action){
            state.showDeleteBtn = !state.showDeleteBtn;
            state.id = action.payload;
        }
    },
})

const store = configureStore({reducer:deleteSlice.reducer})
export const deleteActions = deleteSlice.actions
export default store;