import style from "./../Header.module.scss";
import { NavLink } from "react-router-dom";
import { ILinks } from "./ILinks";

export const Links = () => {
  const links: ILinks[] = [
    { to: "/", name: "MAIN" },
    { to: "/about_us", name: "ABOUT US" },
  ];

  return (
    <>
      <nav>
        {links.map((link) => (
          <div className={ style.link }>
            <NavLink className={({ isActive }) => (isActive ? style.active : undefined)} to={link.to}>{link.name}</NavLink>
          </div>
        ))}
      </nav>
    </>
  );
};
