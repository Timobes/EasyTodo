import { useEffect, useState } from "react"
import { db } from "../../entities/db"
import { DeleteNote } from "./DeleteNote"
import { EditNote } from "./EditNote"

export const GetAnyNote = () => {
    const [data, setData]: any = useState([])

    useEffect(() => {
        setData(db)    
    }, [])

    return <>
        {
            data.map((note: any) => (
                <div key={note.id}>
                    <div>{note.id}</div>
                    <div>{note.name}</div>
                    <EditNote id={note.id}/>
                    <DeleteNote id={note.id} />
                </div>
            ))
        }
    </>
}