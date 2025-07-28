import {createSlice} from '@reduxjs/toolkit'

export const ModeSlice = createSlice({
    name:'Mode',
    initialState:{
        value:0
    },
    reducers:{
        Online : state => {
            state.value = 0;
            console.log("value: ",state.value);
        },
        Friend : state => {
            state.value = 1;
            console.log("value: ",state.value);
        }
    }
})
export const {Online, Friend} = ModeSlice.actions
export default ModeSlice.reducer