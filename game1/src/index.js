import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const left = ["rojo", "verde" , "azul"];
const center = ["rojo", "verde" , "azul"]; 
const right = ["rojo", "verde" , "azul"];

ReactDOM.render(
    <App left={left.sort(() =>{return 0.5 - Math.random()})} center={center.sort(() =>{return 0.5 - Math.random()})} right={right.sort(() => {return 0.5 - Math.random()})}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();