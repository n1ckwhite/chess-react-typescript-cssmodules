import React from "react";
import styles from './CardWrapper.module.css';

interface HTMLElement {
    children: any;
}

export const CardWrapper: React.FC<HTMLElement> = ({children}) => {
    return <ul className={styles.cardWrapper}>{children}</ul>
}