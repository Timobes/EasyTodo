import style from "./Main.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { DeleteNote } from "./notes/DeleteNote";

export const GetCompleted = () => {
    const db = useSelector((state: RootState) => state.db);

    const [data, setData]: any = useState(db);

    useEffect(() => {
        setData(db);
    }, [db]);

    return (
        <>
            <div className={style.complete}>
                <h1>Completed:</h1>
                {data.map((note: any) => (
                    <div key={note.id}>
                        {note.status === true && (
                            <>
                                <div>{note.name}</div>
                                <div>{new Date(note.time).toLocaleString()}</div>
                                <DeleteNote id={note.id} />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};
