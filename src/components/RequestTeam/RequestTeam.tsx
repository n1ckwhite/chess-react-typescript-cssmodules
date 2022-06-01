import React from "react";
import {Text} from "../Text";
import styles from './RequestTeam.module.css';
import stylesTwo from '../Text/Text.module.css';
interface HTMLElement {}

export const RequestTeam: React.FC<HTMLElement> = () => {
    return (
        <section className={styles.request}>
            <Text textTitle="Хочешь в комаду?" textDescr="Свяжись с нами и мы обсудим все детали присоеденения к команде."/>
        </section>
    )
}