import styles from './Menu.module.css';
import React from "react";

interface HTMLElement {
    children: any;
}

export const Menu: React.FC<HTMLElement> = ({children}) => {
    return (
        <menu className={styles.menu}>
            {children}
        </menu>
    )
}