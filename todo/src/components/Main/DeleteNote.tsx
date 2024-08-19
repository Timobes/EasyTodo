import { deleteNote } from "../../features/deleteNote"

export const DeleteNote = (id: any) => {
    console.log(id)
    
    const del = () => deleteNote(id)

    return <>
        <button onClick={del}>Удалить</button>
    </>
}