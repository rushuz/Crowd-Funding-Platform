import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  registerAdminUrl,
  loginAdminUrl,
} from "../config.js";
import { toast } from "react-toastify";

/* attach token dynamically */
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (email, password) => {
  let err;
  try {
    await axios.post(registerAdminUrl(), { email, password });
    toast.success("Registered");
  } catch (e) {
    err = e;
    toast.error(e?.response?.data?.message || "Something went wrong.");
  }
  return err;
};

export const login = async (email, password) => {
  let err;
  try {
    const res = await axios.post(loginAdminUrl(), { email, password });
    localStorage.setItem("token", res.data.jwt);
  } catch (e) {
    err = e;
  }
  return err;
};

export const logout = async () => {
  localStorage.removeItem("token");
};

export const isAuthorised = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const { exp } = jwtDecode(token);
  if (!exp || exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    return false;
  }
  return true;
};
