import { deleteNote } from "../../features/deleteNote"

export const DeleteNote = (id: any) => {
    const del = () => deleteNote(id.id)

    return <>
        <button onClick={del}>Удалить</button>
    </>
}