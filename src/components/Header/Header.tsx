import React from "react";
import styles from './Header.module.css';

interface HTMLElement {
    children: any;
}

export const Header: React.FC<HTMLElement> = ({children}) => {
    return <header className={styles.header}>{children}</header>
}