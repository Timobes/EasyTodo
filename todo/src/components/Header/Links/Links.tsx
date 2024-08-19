import { NavLink } from "react-router-dom"
import { ILinks } from "./ILinks"

export const Links = () => {

    const links: ILinks[] = [
        { to: "/", name: "Main" },
        { to: "/about_us", name: "About Us" },
    ];

    return <>
        <nav>
            { links.map( (link) => <NavLink to={ link.to }>{ link.name }</NavLink> ) }
        </nav>
    </>
}