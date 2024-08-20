import { db } from "../entities/db";

export function editNote(id: number, newName: string) {
	for (let i = 0; i < db.length; i++) {
		if(db[i].id === id) {
			return db[i].name = newName;	
		} 
	}
}