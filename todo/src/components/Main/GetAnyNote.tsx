import { useEffect, useState } from "react"
import { db } from "../../entities/db"

export const GetAnyNote = () => {
    const [data, setData]: any = useState(db)
    
    useEffect(() => {
        setData(db)    
    }, [db])

    console.log('db = ',db)

    return <>
        {
            data.map((note: any) => (
                <div key={note.id}>
                    <div>{note.id}</div>
                    <div>{note.text}</div>
                </div>
            ))
        }
    </>
}