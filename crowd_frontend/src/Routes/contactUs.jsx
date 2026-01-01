import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          consequatur ea quia inventore excepturi officiis deserunt sequi, esse
          nobis laudantium tempora aut, animi praesentium id! Necessitatibus
          laborum vitae vero at!
          <br />
          <br />
          <div className={styles.map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1936799.950455043!2d72.76163773125002!3d18.5373777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1ea090faea3%3A0xa02b86e39fed1228!2sWings%20For%20Dreams%20%7C%20Pune%20%7C%20Best%20Ngo%20NGO%20in%20Pune%20%7C!5e0!3m2!1sen!2sin!4v1767260573819!5m2!1sen!2sin" 
              width="600"
              height="380"
              frameBorder="1"
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>ROTARACT IIITM</b>
                <br />
                IIITM Campus,
                <br />
                Morena Link Rd,
                <br /> Gwalior, Madhya Pradesh 474015
                <br /> <br />
                For any queries, reach us out at email : rotaract@iiitm.ac.in
                <br />
                +91-9876543210
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
