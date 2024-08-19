import { NavLink } from "react-router-dom"

export const Links = () => {
    return <>
        <nav>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/about_us">About us</NavLink>
        </nav>
    </>
}