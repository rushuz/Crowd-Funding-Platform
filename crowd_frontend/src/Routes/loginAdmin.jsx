import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../Components/reuseableAdminForm";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import { login, isAuthorised } from "../services/auth";

const LoginAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuthorised()) {
    toast.success("Already logged in");
    props.history.replace("/admin/dashboard");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await login(email, password);

    if (!error) {
      props.history.replace("/admin/dashboard");
    } else {
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Form
        title="Login Admin"
        handleSubmit={handleSubmit}
        handleEmailChange={(e) => setEmail(e.target.value)}
        handlePasswordChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default LoginAdmin;
