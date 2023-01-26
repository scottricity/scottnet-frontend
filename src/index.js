import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Utils } from "./utils.js"

let tester = new Utils()
console.table(tester.slp([111,222,333,333,334,335, 555, 556]))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

