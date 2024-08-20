import { useEffect, useState } from "react"
import { db } from "../../entities/db"
import { DeleteNote } from "./DeleteNote"
import { EditNote } from "./EditNote"

export const GetAnyNote = () => {
    const [data, setData]: any = useState(db)

    useEffect(() => {
        const updatedData = [...db]
        setData(updatedData);
    }, [])

    return <>
        {
            data.map((note: any) => (
                <div key={note.id}>
                    <div>Id = {note.id}</div>
                    <div>{note.name}</div>
                    <div>{new Date(note.time).toLocaleString()}</div>
                    <EditNote id={note.id}/>
                    <DeleteNote id={note.id} />
                </div>
            ))
        }
    </>
}