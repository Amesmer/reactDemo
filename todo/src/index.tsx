import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
// 导入provide包裹结构  达到统一维护store的效果
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 严格模式会导致useeffect 调用两次
  // <React.StrictMode>
  <Provider store={store}>
     <App />
  </Provider>
   
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
