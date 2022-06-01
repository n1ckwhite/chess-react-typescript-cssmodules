import React from 'react';
import './App.css';
import {Wrapper} from "./components/Wrapper";
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";
import {Links} from "./components/Links";
import logo from './img/logo.svg';

function App() {
  return (
    <div className="App">
        <Header>
        <Wrapper>
            <Menu>
                <img src={logo} alt="logo"/>
                <Links/>
            </Menu>
        </Wrapper>
        </Header>

    </div>
  );
}

export default App;
