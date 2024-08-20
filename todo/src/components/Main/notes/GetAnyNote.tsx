import { useEffect, useState } from "react"
import { DeleteNote } from "./DeleteNote"
import { EditNote } from "./EditNote"
import { useSelector } from "react-redux"
import { RootState } from "../../../state/store"
import { CompletedNote } from "./CompletedNote"

export const GetAnyNote = () => {
    const db = useSelector((state: RootState) => state.db);
    const [data, setData]: any = useState(db)

    useEffect(() => {
        setData(db);
    }, [db])

    return <>
        <div>
            {
                data.map((note: any) => (
                    <div key={note.id}>
                        {note.status === false && ( 
                            <>
                                <div>Id = {note.id}</div>
                                <div>{note.name}</div>
                                <div>{new Date(note.time).toLocaleString()}</div>
                                <CompletedNote id={note.id} />
                                 <EditNote id={note.id} />
                                <DeleteNote id={note.id} />
                            </>
                        )}
                    </div>
                ))
            }
        </div>
    </>
}