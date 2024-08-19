import { Main } from "../Main/Main"
import { AboutUs } from "../AboutUs/AboutUs"
import { Route, Routes } from "react-router-dom"
import { Error_404 } from "../Error/Error_404"
import { IRouter } from "./IRouterSection"

export const RouterSection = () => {

    const router: IRouter[] = [
        { path: '/', element: <Main /> },
        { path: '/about_us', element: <AboutUs /> },
        { path: '*', element: <Error_404 /> }
    ];

    return <>
        <Routes>
            { router.map( (route) => <Route path={ route.path } element={ route.element } /> ) }
        </Routes>
    </>
}