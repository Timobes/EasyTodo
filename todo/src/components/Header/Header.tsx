import { Links } from "./Links/Links";
import logo from "./../../images/logo.png";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <header>
        <div className={style.wrapper}>
          <div className={style.header}>
            <section>
              <div className={style.logo}>
                <img src={logo} alt="logo" />
              </div>
              <Links />
            </section>
          </div>
        </div>
      </header>
    </>
  );
};
