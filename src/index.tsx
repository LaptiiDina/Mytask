import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
#root{
  margin:0 auto,
  font-family: 'Poppins', sans-serif;
  font-size:10px;
  font-weight:300;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
