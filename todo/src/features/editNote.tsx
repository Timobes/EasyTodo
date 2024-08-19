import { INote } from "../entities/note";

export function editNote(note: INote, newName: string): void {
	note.name = newName
	// newState(newNote)
}