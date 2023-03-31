import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import './index.css';

import App from './App.js';
import TransferAcc from './routes/transfer_account';
import TransferAmt from './routes/transfer_amount';
import TransferPw from './routes/transfer_password';
import TransferEnd from './routes/transfer_end';
import TransferLogMain from './routes/transfer_logmain';
import QnaRegister from './routes/qna_register';
import QnaLogMain from './routes/qna_logmain';
import QnaLogDetail from './routes/qna_logdetail'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transfer/account" element={<TransferAcc />} />
      <Route path="/transfer/amount" element={<TransferAmt />} />
      <Route path="/transfer/password" element={<TransferPw />} />
      <Route path="/transfer/end" element={<TransferEnd />} />
      <Route path="/log/main" element={<TransferLogMain/>} />

      <Route path="/qna/register" element={<QnaRegister/>} />
      <Route path="/qna/log/main" element={<QnaLogMain/>} />
      <Route path="/qna/log/detail/:no" element={<QnaLogDetail/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
