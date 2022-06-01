import React from "react";
import styles from './Promo.module.css';

interface HTMLElement {
    children: any;
}

export const Promo: React.FC<HTMLElement> = ({children}) => {
    return (
        <div className={styles.Promo}>
            {children}
        </div>
    )
}

