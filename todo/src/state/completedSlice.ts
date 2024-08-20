import { createSlice } from "@reduxjs/toolkit";

export let completed: any = [];

export const completedSlice = createSlice({
    name: 'completed',
    initialState: completed,
    reducers: {
        
    },
});

export const {} = completedSlice.actions;

export default completedSlice.reducer;
