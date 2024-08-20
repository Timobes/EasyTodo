import { useState } from "react"
import { useDispatch } from "react-redux";
import { edit } from "../../state/dbSlice";

export const EditNote = (id: any) => {
    const dispatch = useDispatch();

    const [text, setText]: any = useState()
    // editNote(id.id, text) 
    const sub = () => dispatch(edit({id: id.id, newName: text}))

    return <>
        <div>
            <input type="text" name="" id="" onChange={e => setText(e.target.value)}/>
            <button onClick={sub}>Изменить текст</button>    
        </div>    
    </>
}