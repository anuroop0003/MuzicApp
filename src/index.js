
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Songs} from './musicApp/Data/data';
import MusicApp from './musicApp/musicapp';
import reportWebVitals from './reportWebVitals';

export const SongProvider = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <SongProvider.Provider value={{Songs}}>
    <MusicApp />
    </SongProvider.Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
