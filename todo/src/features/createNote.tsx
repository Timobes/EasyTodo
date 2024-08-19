import { db } from "../entities/db";
import { INote } from "../entities/note";

// export function createNote(note: INote): void {
// 	// newState(note)
// }

export function createNote(note: string): void {
	// newState(note)
	

	let newNote: INote = {
		id: db.length + 1,
		name: note,
		status: false,
		time: new Date()
	}

	console.log(newNote)

	db.push(newNote)
}