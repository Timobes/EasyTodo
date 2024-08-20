import style from "./AboutUs.module.scss";
import { useEffect } from "react";

export const AboutUs = () => {

    useEffect(() => {
        document.title = "About Us";
    }, []);

    return <>
        <section>
            <div className={ style.wrapper }>
                <div className={ style.about }>
                    <h1>О НАС</h1>
                </div>
            </div>
        </section>
    </>
}