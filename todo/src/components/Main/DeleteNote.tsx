import { deleteNote } from "../../features/deleteNote"

export const DeleteNote = (id: any) => {
    console.log('удалён id =',id.id)
    
    const del = () => deleteNote(id.id)

    return <>
        <button onClick={del}>Удалить</button>
    </>
}