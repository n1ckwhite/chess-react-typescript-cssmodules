import React from "react";
import styles from './Button.module.css';
interface HTMLButtonElement {
    text: string,
    link: string
}

export const Button: React.FC<HTMLButtonElement> = ({text,link}) => {
    return <a href={link} className={styles.button}>{text}</a>
}