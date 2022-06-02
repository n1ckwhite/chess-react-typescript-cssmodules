import React from "react";
import styles from "./Text.module.css";
import classNames from "classnames";

type TText = React.HTMLProps<HTMLElement> & {
    textTitle?: string,
    textDescr?: string,
    blockClass?: string | undefined
}


export const Text: React.FC<TText> = ({blockClass,textTitle,textDescr}) => {
    return (
        <div className={classNames(styles.textBlock, blockClass)}>
            <h2 className={styles.textTitle}>{textTitle}</h2>
            <p className={styles.textDescr}>{textDescr}</p>
        </div>
    )
}