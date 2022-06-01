import React from 'react';
import './App.css';
import {Wrapper} from "./components/Wrapper";
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";
import {Links} from "./components/Links";
import logo from './img/logo.svg';
import desk from './img/desk.svg';
import {Title} from "./components/Title";
import {Text} from "./components/Text";
import styles from './components/Text/Text.module.css';
import {DeskIcon} from "./components/DeskIcon";
import {Team} from "./components/Team";

function App() {
  return (
    <div className="App">
        <Header>
        <Wrapper>
            <Menu>
                <img src={logo} alt="logo"/>
                <Links/>
            </Menu>
            <Title title="клуб"/>
            <Text textTitle="Правильные шахматы" textDescr="Приходите к нам, играть в шахматы! Сразитесь классическом поединке, блиц состязании
и бою с гройсмейстером. " blockClass={styles.textBlock_mt80}/>
            <DeskIcon src={desk} alt="desk"/>
        </Wrapper>
        </Header>
        <main className="content">
           <Team/>
        </main>
    </div>
  );
}

export default App;
