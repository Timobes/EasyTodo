import { useDispatch} from "react-redux";
import { complete, deletes } from "../../../state/dbSlice";

export const CompletedNote = (id: any) => {
    const dispatch = useDispatch();

    const sub = () => {
        dispatch(complete(id.id))
        // dispatch(deletes(id.id))
    }

    return <>
        <button onClick={sub}>Выполнить</button>
    </>
}