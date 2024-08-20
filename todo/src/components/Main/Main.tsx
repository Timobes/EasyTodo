import { GetCompleted } from "./GetCompleted"
import { Create } from "./notes/CreateNote"
import { GetAnyNote } from "./notes/GetAnyNote"
import { useEffect } from "react"

export const Main = () => {

    useEffect(() => {
        document.title = "Main";
    }, []);

    return <>
        <main>
            <Create />
            <GetAnyNote />
            <GetCompleted />
        </main>
    </>
}