import { Main } from "../Main/Main"
import { AboutUs } from "../AboutUs/AboutUs"
import { Route, Routes } from "react-router-dom"
import { Error_404 } from "../Error/Error_404"

export const RouterSection = () => {
    return <>
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/about_us" element={ <AboutUs /> } />
            <Route path="*" element={ <Error_404 /> } />
        </Routes>
    </>
}