import React from "react";
import styles from "./Title.module.css";

interface HTMLTitleElement {
    title: string;
}

export const Title: React.FC<HTMLTitleElement> = ({title}) => {
    return <h1 className={styles.title}>{title}</h1>
}