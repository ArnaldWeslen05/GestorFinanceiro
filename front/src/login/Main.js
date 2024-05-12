import React, { useState } from "react";
import Login from "./Login.js";
import App from '../componetes/App.js';

const Main = () => {
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  }

  return (
    <div>
      {!logado && <Login onLogin={handleLogin} />}
      {logado && <App />}
    </div>
  );
}

export default Main;
