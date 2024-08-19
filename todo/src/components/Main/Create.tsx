import { useState } from "react"
import { createNote } from "../../features/createNote"

export const Create = () => {
    const [text, setText]: any = useState()
    
    // createNote()
    console.log(text)
    
    return <>
        <div>
            <input type="text" name="" id="" onChange={e => setText(e.target.value)}/>
            
            <button onClick={() => createNote(text)}>Create</button>
        </div>
    </>
}