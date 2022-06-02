import React from "react";
import styles from  './Wrapper.module.css';
interface HTMLElement {
    children: any;
}

export const Wrapper: React.FC<HTMLElement> = ({children}) => {
    return <div className={styles.wrapper}>{children}</div>
}