import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// 컨퍼넌트는 리액트 컨텐츠 단위
//import App, { Activeapp } from './App';
import Aheader from './chacha/js/Header';
import Afooter from './chacha/js/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aheader />
    {/* <App /> */}
    <Afooter />
    {/* <Activeapp /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
