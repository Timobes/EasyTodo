import { createSlice } from "@reduxjs/toolkit"
import { INote } from "../entities/note"

export let db: any = []

export const dbSlice = createSlice({
    name: 'db',
    initialState: db,
    reducers: {
        create: (state, action) => {
            function createId (): number {
                let last: any = state.at(-1) // ищём индекс последнего элемента
                
                if (last === undefined) {
                    return 0
                } else {
                    return last.id + 1
                }
            }
        
            let newNote: INote = {
                id: createId(),
                name: action.payload,
                status: false,
                time: new Date()
            }
        
            state.push(newNote)
        },

        edit: (state, action) => {
            const {id, newName} = action.payload

            for (let i = 0; i < state.length; i++) {
                if(state[i].id === id) {
                    state[i].name = newName;	
                } 
            }
        },

        deletes: (state, action) => {
            for (let i = 0; i < state.length; i++) {
                if(state[i].id === action.payload) {
                    let num: number = state.indexOf(state[i])
                   
                    state.splice(num, 1)
                }
            }
        },

        complete: (state, action) => {
            const { id } = action.payload;

            for (let i = 0; i < state.length; i++) {
                if (state[i].id === id) {
                    state[i].status = true;
                }
            }
        }
    }
})

export const {create, edit, deletes, complete} = dbSlice.actions

export default dbSlice.reducer