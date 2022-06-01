import React from "react";
import styles from './Links.module.css';
import arrow from '../../img/arrow.svg';
import {Button} from "../Button";
interface HTMLElement {}

export const Links: React.FC<HTMLElement> = () => {
    return (
        <ul className={styles.links}>
            <li className={styles.item}><a href="#" className={styles.link} target="_blank">Вступайте в клуб</a> <img src={arrow} alt="arrow" className={styles.arrow} /></li>
            <li className={styles.item}><Button text="Зарегистрироваться" link="#"/></li>
        </ul>
    )
}