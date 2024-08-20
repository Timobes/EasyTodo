import style from "./Error_404.module.scss";
import { useEffect } from "react"

export const Error_404 = () => {

    useEffect(() => {
        document.title = "Error 404";
    }, []);

    return <>
        404   
    </>
}