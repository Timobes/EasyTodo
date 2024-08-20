import { db } from "../entities/db";

export function deleteNote(id: number) {
	for (let i = 0; i < db.length; i++) {
		if(db[i].id === id) {
			let num: number = db.indexOf(db[i])
			
			if (num === -1) {
				return null
			} else {
				db.splice(num, 1)
			}
		}
	}
}