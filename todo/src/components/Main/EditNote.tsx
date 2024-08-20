import { useState } from "react"
import { editNote } from "../../features/editNote"

export const EditNote = (id: any) => {
    const [text, setText]: any = useState()

    const sub = () => editNote(id.id, text)

    return <>
        <div>
            <input type="text" name="" id="" onChange={e => setText(e.target.value)}/>
            <button onClick={sub}>Изменить текст</button>    
        </div>    
    </>
}