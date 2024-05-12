import React from 'react'
import ReactDOM from 'react-dom/client';
// import App from './componetes/App'
import Main from './login/Main.js';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Main></Main>
  </React.StrictMode>
);
