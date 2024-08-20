import { db } from "../entities/db";
import { INote } from "../entities/note";

// export function createNote(note: INote): void {
// 	// newState(note)
// }

export function createNote(note: string): void {
	// newState(note)

	function createId (): number {
		let last: any = db.at(-1)
		
		console.log('last', last)
		
		if (last === undefined) {
			return 0
		} else {
			return last.id + 1
		}
		
	}

	let newNote: INote = {
		id: createId(),
		name: note,
		status: false,
		time: new Date()
	}

	console.log(newNote)

	db.push(newNote)
}