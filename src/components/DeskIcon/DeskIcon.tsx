import React from "react";
import styles from "./DeskIcon.module.css";
import classNames from "classnames";

interface HTMLImageElement {
    src: string,
    alt: string,
    mod?: string | undefined;
}

export const DeskIcon: React.FC<HTMLImageElement> = ({src,alt,mod}) => {
    return <img src={src} alt={alt} className={classNames(styles.icon, mod)}/>
}