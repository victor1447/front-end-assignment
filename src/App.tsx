import "./App.css";

import { Routes, Route, Link, Navigate, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Destination from "./pages/Destinations";
import { useContext } from "react";
import { LoginContext } from "./context/LoginContext";

const App = () => {
  const { loginSuccess } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={loginSuccess ? <Destination /> : <Navigate to="login" />}
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
