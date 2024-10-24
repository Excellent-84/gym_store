import React, { createContext } from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';

export const context = createContext(null);

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <context.Provider value={{
    user: new UserStore()
  }}>
    <App />
  </context.Provider>,

  document.getElementById('root')
);
