import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import UserInput from './components/userInput/UserInput';
import NavBar from './components/navbar/NavBar';
import Card from './components/card/Card';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavBar/>
    <BrowserRouter basename='pi' >
    <Routes>
      <Route>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/produtos' element={<Card/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    <Card/>
    <UserInput/>
    {/* (<App/>) */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
