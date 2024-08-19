import { INote } from "../entities/note";

// export function createNote(note: INote): void {
// 	// newState(note)
// }

export function createNote(note: string): void {
	// newState(note)
	

	let newNote: INote = {
		id: 1,
		name: note,
		status: false,
		time: new Date()
	}

	console.log(newNote)
}