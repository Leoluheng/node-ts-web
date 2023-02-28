import { useState, useEffect } from "react";

import style from "../stylesheets/Generic.module.css";
import SocialMediaIcons from "./SocialMediaIcons";

function Header() {

    interface headerProp {
        headline : string | "Hello"
    };

    const [headerProp, setHeaderProp] = useState<headerProp>();
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        let url = "/generic/header";
        let options = {
            method : "GET"
        };
        fetch(url, options).then(
            // checking response status
            res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            }
        ).then(
            // process response data
            data => {
                setHeaderProp(data);
            }
        ).catch(e => {
            console.log("Error fetching data: ", e.message);
            setError(e);
        });
    });

    return (
        <div className={style.header}>
            { (headerProp?.headline === undefined) ? ("Hello World") : (headerProp.headline) }
            <span className={style["vertical-seperator"]}>|</span>
            <SocialMediaIcons></SocialMediaIcons>
        </div>
    )
}

export default Header