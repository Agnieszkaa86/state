import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { UserProvider } from "./contex";

// const Mycontext = createContext();
// console.log("Mycontext", Mycontext)

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider value={{username:"John"}}>
    <App />
  </UserProvider>
);


