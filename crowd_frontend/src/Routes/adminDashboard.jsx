import React from "react";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";
import NavBar from "../Components/navbar_notLanding";
import ShowQuery from "../Components/showquery";
import ScrollToTop from "../Components/scrollToTop";
import { logout, isAuthorised } from "../services/auth";
import { toast } from "react-toastify";
import styles from "../Components/styles/dashboard.module.css";
import user from "../Components/assets/admin.png";

const AdminDashboard = () => {
  const history = useHistory();

  if (!isAuthorised()) {
    toast.error("Not authorised");
    history.replace("/page-not-found");
    return null;
  }

  const email = jwtDecode(localStorage.getItem("token")).email;

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <div className={`col-md-10 m-auto border ${styles.container}`}>
        <img src={user} className={styles.image} alt="userIcon" />
        <h2 className={styles.text}>Admin Dashboard</h2>
        <b>{email}</b>
        <hr />

        <button
          className="btn btn-warning m-2"
          onClick={() => history.push("/admin/new")}
        >
          New Admin +
        </button>

        <button
          className="btn btn-warning"
          onClick={() => history.push("/admin/campaign/new")}
        >
          New Campaign
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={() => history.push("/all-campaigns")}
        >
          All Campaigns
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            logout().then(() => {
              history.replace("/");
            });
          }}
        >
          Logout
        </button>

        <hr />
        <ShowQuery />
        <br />
      </div>
    </>
  );
};

export default AdminDashboard;
