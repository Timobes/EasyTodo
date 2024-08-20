import { Create } from "./notes/CreateNote"
import { GetAnyNote } from "./notes/GetAnyNote"

export const Main = () => {
    return <>
        <main>
            <Create />
            <GetAnyNote />
        </main>
    </>
}