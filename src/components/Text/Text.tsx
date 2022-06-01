import React from "react";
import styles from "./Text.module.css";
import classNames from "classnames";

interface HTMLElement {
    textTitle: string,
    textDescr: string,
    blockClass: string;
}

export const Text: React.FC<HTMLElement> = ({blockClass,textTitle,textDescr}) => {
    return (
        <div className={classNames(styles.textBlock, blockClass)}>
            <h2 className={styles.textTitle}>{textTitle}</h2>
            <p className={styles.textDescr}>{textDescr}</p>
        </div>
    )
}