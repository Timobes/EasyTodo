import { useDispatch } from "react-redux";
import { deletes } from "../../../state/dbSlice";

export const DeleteNote = (id: any) => {
    const dispatch = useDispatch();
    const del = () => dispatch(deletes(id.id))

    return <>
        <button onClick={del}>Удалить</button>
    </>
}