import { INote } from "../entities/note";

export function deleteNote(note: INote) {
	note.id = -1
}