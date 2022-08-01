import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DailyWeather from './components/DailyWeather';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App/>} />
      <Route path='/dailyWeather/:id' element={<DailyWeather/>} />
  </Routes>
  </BrowserRouter>
);

