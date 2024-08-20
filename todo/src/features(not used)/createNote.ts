import { db } from "../entities/db";
import { INote } from "../entities/note";

export function createNote(note: string): void {
	function createId (): number {
		let last: any = db.at(-1)
		
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

	db.push(newNote)
}