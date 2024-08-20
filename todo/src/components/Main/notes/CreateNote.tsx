import { useState } from "react"
import { useDispatch} from "react-redux";
import { create } from "../../../state/dbSlice";

export const Create = () => {
    const [text, setText]: any = useState()

    const dispatch = useDispatch();

    return <>
        <div>
            <input type="text" name="" id="" onChange={e => setText(e.target.value)}/> 
            <button onClick={() => dispatch(create(text))}>Create</button>
        </div>
    </>
}