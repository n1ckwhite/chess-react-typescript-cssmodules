import React from "react";
import styles from './Footer.module.css';
import {Wrapper} from "../Wrapper";
import logo from '../../img/logo.svg';
import {Button} from "../Button";

interface HTMLElement {

}

export const Footer: React.FC<HTMLElement> = () => {
    return (
        <footer className={styles.footer}>
            <Wrapper>
                <div className={styles.flexcolumn}>
                    <img src={logo} alt="лого" className={styles.footerlogo}/>
                    <Button text="Зарегистрироваться" link="#"/>
                    <p className={styles.footertxt}>Шахматный клуб в Москве.</p>
                    <p className={styles.footercopy}>&copy; Chees Club.</p>
                </div>
            </Wrapper>
        </footer>
    )
}