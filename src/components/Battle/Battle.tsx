import React from "react";
import styles from  './Battle.module.css';
import {Text} from "../Text";
import {CardWrapper} from "../CardWrapper";
import {Card} from "../Card";
import battleOne from '../../img/battle1.svg';
import imgTwo from '../../img/battle2.png';
import battleThree from '../../img/battle3.png';
import {DeskIcon} from "../DeskIcon";
import deskGreen from '../../img/desk_green.svg';
import stylesTwo from '../DeskIcon/DeskIcon.module.css';

interface HTMLElement {}

export const Battle: React.FC<HTMLElement> = () => {
    return (
        <section className={styles.battle}>
                <Text textTitle="Сражения" textDescr="Сражайтесь в парах и приятно проводите время. Если хотите прокачать свои навыки — сыграйте
с нашими шахматистами."></Text>
                <CardWrapper>
                    <Card src={battleOne} alt="battle1"/>
                    <Card src={imgTwo} alt="battle2"/>
                    <Card src={battleThree} alt="battle3"/>
                    <DeskIcon src={deskGreen} alt="desk green" mod={stylesTwo.icon_r}/>
                </CardWrapper>
        </section>
    )
}