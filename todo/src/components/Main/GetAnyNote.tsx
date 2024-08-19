import { useEffect, useState } from "react"
import { db } from "../../entities/db"
import { DeleteNote } from "./DeleteNote"

export const GetAnyNote = () => {
    const [data, setData]: any = useState([])

    useEffect(() => {
        setData(db)    
    }, [])

    console.log('db = ',db)

    return <>
        {
            data.map((note: any) => (
                <div key={note.id}>
                    <div>{note.id}</div>
                    <div>{note.name}</div>
                    <DeleteNote id={note.id} />
                </div>
            ))
        }
    </>
}