import React from 'react';
import './App.css';
import {Wrapper} from "./components/Wrapper";
import {Header} from "./components/Header";
import {Menu} from "./components/Menu";
import logo from './img/logo.svg';

function App() {
  return (
    <div className="App">
        <Header>
        <Wrapper>
            <Menu>
                <img src={logo} alt="logo"/>
            </Menu>
        </Wrapper>
        </Header>

    </div>
  );
}

export default App;
