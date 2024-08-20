import { useDispatch} from "react-redux";
import { complete } from "../../../state/dbSlice";

export const CompletedNote = (id: any) => {
    const dispatch = useDispatch();

    return <>
        <button onClick={() => dispatch(complete(id.id))}>Выполнить</button>
    </>
}