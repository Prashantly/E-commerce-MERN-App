import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FcCustomerSupport } from "react-icons/fc";

const Contact = () => {
  return (
    <Layout title={"Contact Us | S-Mart"}>
      <div className="container contact-container">
        <div className="row contact-page">
          <div className="col-md-6">
            <img
              src="/images/contact.avif"
              alt="contactus"
              className="contact-image"
            />
          </div>
          <div className="col-md-6">
            <h1 className="text-center bg-dark text-white p-2 text-uppercase">
              Contact Us
            </h1>
            <div className="contact-details">
              <p>
                Any queries or information about our products? Feel free to call
                us anytime. We're available 24/7 to assist you.
              </p>
              <div className="contact-info">
                <p>
                  <BiMailSend /> : www.helpdesk@smart.com
                </p>
                <p>
                  <BiPhoneCall /> : 1-800-555-CARE (1-800-555-2273)
                </p>
                <p>
                  <FcCustomerSupport /> : 1-800-123-HELP (1-800-123-4357)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
