import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContextProvider';
import OutlinedCard from './components/quota';
import Loading from './components/Loading';
import Dashboard from './components/dashbord';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <BrowserRouter>
    
    <Dashboard/>
   
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
