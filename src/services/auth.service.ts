import axios from "axios";
import { Auth } from "../@types/auth";

const API_URL = "https://tripx-test-functions.azurewebsites.net/api/login";

const authLogin = ({ username, password }: Auth) => {
  const response = axios.post(API_URL, {
    username,
    password,
  });

  return response;
};

export { authLogin };
