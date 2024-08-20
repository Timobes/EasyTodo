import style from "./../Main.module.scss";
import { useState } from "react"
import { useDispatch} from "react-redux";
import { create } from "../../../state/dbSlice";

export const Create = () => {
    const [text, setText]: any = useState()

    const dispatch = useDispatch();

    return <>
        <div className={ style.create }>
            <input type="text" placeholder="Введите текст" name="" id="" onChange={e => setText(e.target.value)}/> 
            <button onClick={() => dispatch(create(text))}>Create</button>
        </div>
    </>
}