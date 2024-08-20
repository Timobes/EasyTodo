import style from "./Main.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

export const GetCompleted = () => {
  const db = useSelector((state: RootState) => state.db);

  const [data, setData]: any = useState(db);

  useEffect(() => {
    setData(db);
  }, [db]);

  return (
    <>
      <div className={ style.complete }>
        <h1>Completed:</h1>
        {data.map((note: any) => (
          <div key={note.id}>
            <div>Id = {note.id}</div>
            <div>{note.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};
