import { createSlice } from "@reduxjs/toolkit";
import { complete } from "./dbSlice";

export let completed: any = [];

export const completedSlice = createSlice({
    name: 'completed',
    initialState: completed,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(complete, (state, action) => {

            const { id } = action.payload;

            const completedNote = state.find((note: any) => note.id === id);

            console.log('compNote, id = ',completedNote, id)

            if (completedNote) {
                state.push(completedNote);
            }
        });
    },
});

export const {} = completedSlice.actions;

export default completedSlice.reducer;
