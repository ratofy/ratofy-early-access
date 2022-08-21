import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Claim from './pages/claim'
import reportWebVitals from './reportWebVitals';
import UserStates from './context/userStates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserStates>
  <BrowserRouter>
  <React.StrictMode>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/claim" element={<Claim />} />
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
  </UserStates>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
