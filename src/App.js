import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎使用爱青岛数据服务展示平台</h1>
        </header>
        <Button type="primary">Button</Button>
        <p className="App-intro">
          这是一个假消息
        </p>
      </div>
    );
  }
}

export default App;
