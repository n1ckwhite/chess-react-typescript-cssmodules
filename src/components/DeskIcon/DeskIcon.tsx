import React from "react";
import styles from "./DeskIcon.module.css";

interface HTMLImageElement {
    src: string,
    alt: string;
}

export const DeskIcon: React.FC<HTMLImageElement> = ({src,alt}) => {
    return <img src={src} alt={alt} className={styles.icon}/>
}