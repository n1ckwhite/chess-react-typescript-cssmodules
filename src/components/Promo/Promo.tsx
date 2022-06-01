import React from "react";
import styles from './Promo.module.css';

interface HTMLElement {
    children: any;
}

export const Promo: React.FC<HTMLElement> = (props) => {
    return (
        <div className={styles.Promo}>
            {props.children}
        </div>
    )
}

