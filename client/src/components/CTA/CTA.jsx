import { useState, useEffect, useMemo } from "react";
import style from "./CTA.module.scss";

const CTA = (props) => {
    const [scrollY, setScrollY] = useState(0);
    const [isMiddle, setIsMiddle] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    const middleOfPage = useMemo(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        return (documentHeight - windowHeight) / 2;
    });

    useEffect(() => {
        setIsMiddle(scrollY > middleOfPage);        
    }, [scrollY, middleOfPage]);

    return (
        <div>
            {isMiddle && <button className={style.callButton} onClick={props.onClick}>Call Now!</button>}
        </div>
    )

};

export default CTA;