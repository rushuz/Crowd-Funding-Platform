import React, { useState } from "react";
import { toast } from "react-toastify";
import Form from "../Components/reuseableAdminForm";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import { register, isAuthorised } from "../services/auth";

const RegisterAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isAuthorised()) {
    toast.error("Not authorised");
    props.history.replace("/page-not-found");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await register(email, password);

    if (!error) {
      toast.success("Admin registered successfully");
      props.history.push("/admin/dashboard");
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
        title="Register Admin"
        handleSubmit={handleSubmit}
        handleEmailChange={(e) => setEmail(e.target.value)}
        handlePasswordChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
};

export default RegisterAdmin;
