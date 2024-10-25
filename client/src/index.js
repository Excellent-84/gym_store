import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';

export const context = createContext(null);

const root = createRoot(document.getElementById("root"));
root.render(
  <context.Provider value={{
    user: new UserStore(),
    item: new ItemStore()
  }}>
    <App />
  </context.Provider>
);
