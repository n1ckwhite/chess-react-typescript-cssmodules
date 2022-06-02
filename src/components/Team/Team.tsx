import React from "react";
import styles from './Team.module.css';
import {Wrapper} from "../Wrapper";
import {Text} from "../Text";
import {CardWrapper} from "../CardWrapper";
import {Card} from "../Card";
import andrey from '../../img/andrey.png';
import nikita from '../../img/nikita.png';
import aleksey from '../../img/aleksey.png';
interface HTMLElement {}



export const Team: React.FC<HTMLElement> = () => {
    return (
        <section className={styles.team}>
            <Wrapper>
                <Text textTitle="Наша команда" textDescr="Лучшие шахматисты и шахматистки любители России, гройсмейстеры, с ними играть — одно удовольствие!"/>
                <CardWrapper>
                    <Card src={andrey} alt="Андрей" name="Андрей" text="Шахматист, писатель."/>
                    <Card src={nikita} alt="Никита" name="Никита" text="Шахматист, кулинар."/>
                    <Card src={aleksey} alt="Алексей " name="Алексей " text="Шахматист, геймер."/>
                </CardWrapper>
            </Wrapper>
        </section>
    )
}