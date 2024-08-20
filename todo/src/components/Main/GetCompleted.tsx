import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export const GetCompleted = () => {
    
    const comp = useSelector((state: RootState) => state.completed);
    console.log('comp = ',comp)
    const [data, setData]: any = useState(comp)

    useEffect(() => {
        setData(comp)
    },[comp])


    return <>
        <h1>Completed:</h1>
        {
            data.map((note: any) => (
                <div key={note.id}>
                    <div>Id = {note.id}</div>
                    <div>{note.name}</div>
                </div>
            ))
        }
    </>
}