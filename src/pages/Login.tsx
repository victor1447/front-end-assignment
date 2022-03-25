import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/Form/LoginForm";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { loginSuccess } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess) {
      navigate("/");
    }
  }, [loginSuccess]);
  return <LoginForm />;
};

export default Login;
