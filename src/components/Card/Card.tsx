import React from "react";
import styles from './Card.module.css';

interface HTMLElement {
    src: string,
    alt: string,
    name?: string,
    text?: string;
}

export const Card: React.FC<HTMLElement> = ({src,alt,name,text}) => {
    return (
        <li className={styles.card}>
            <img src={src} alt={alt} className={styles.image}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.text}>{text}</p>
        </li>
    )
}