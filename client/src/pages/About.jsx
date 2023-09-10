import React from "react";
import Layout from "../components/Layout/Layout";
// import aboutImage from "../assets/about-image.jpg"; // Import your about image

const About = () => {
  return (
    <Layout title={"About Us | S-Mart"}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 about-us-content">
            <h1 className="text-muted text-center mb-4">About Us</h1>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg"
                alt="About Us"
                className="img-fluid rounded about-image"
              />
            </div>
            <p className="text-muted">
              <b className="fs-5">Welcome to S-Mart.</b> <br />
              Your One-Stop Online Shopping Destination At S-Mart, we are
              dedicated to providing you with a seamless and delightful online
              shopping experience. Our mission is to offer a wide range of
              high-quality products at competitive prices, all while ensuring
              convenience and customer satisfaction.
            </p>

            <div className="about-us-details">
              <h4>Our Vision</h4>
              <p>
                Our vision is to be the leading E-commerce platform where
                customers can discover, explore, and shop for a diverse
                selection of products from the comfort of their homes. We aim to
                create a reliable and trustworthy platform that simplifies the
                way you shop and brings joy to every purchase.
              </p>
              <h4>Wide Variety of Products</h4>

              <p>
                Discover an extensive collection of products that cater to your
                every need. From trendy fashion and electronics to home
                essentials and beyond, S-Mart offers an array of choices to suit
                your lifestyle.
              </p>

              <img
                src="https://m.media-amazon.com/images/G/31/amazonservices/Blog/eCommerce_Platform.png"
                alt="Wide Variety"
                className="img-fluid rounded"
                style={{ width: "70%", height: "450px" }}
              />
              <h4>Quality Assurance</h4>
              <p>
                We take pride in curating products from reputable brands and
                sellers, ensuring that you receive items of the highest quality.
                Our commitment to quality means you can shop with confidence,
                knowing that you're investing in products that will stand the
                test of time.
              </p>
              <img
                src="https://42works.net/wp-content/uploads/2021/11/Quality-Assurance.jpg"
                alt="Quality Assurance"
                className="img-fluid rounded"
                style={{ width: "70%", height: "450px" }}
              />
              <h4>User-Friendly Experience</h4>
              <p>
                Navigating our website is a breeze, with intuitive design and
                easy-to-use features that enhance your online shopping journey.
                Our goal is to make your experience hassle-free, from browsing
                products to completing your purchase.
              </p>
              <img
                src="https://www.zestard.com/wp-content/uploads/2020/09/9-Steps-to-Make-Your-eCommerce-Store-User-Friendly-1.jpg"
                alt="User-Friendly"
                className="img-fluid rounded"
                style={{ width: "70%", height: "450px" }}
              />
              <h4>Secure Shopping</h4>
              <p>
                Your security is our top priority. We implement robust security
                measures to protect your personal and payment information,
                ensuring that you can shop with peace of mind.
              </p>
              <h4>Customer Care</h4>
              <p>
                Our dedicated customer support team is here to assist you every
                step of the way. Whether you have questions about a product,
                need help with an order, or require post-purchase assistance,
                our friendly team is ready to help.
              </p>
              <img
                src="https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2018/10/14121458/Ecommerce-customer-service-banner.png"
                alt="Customer support"
                className="img-fluid rounded"
                style={{ width: "70%", height: "450px" }}
              />
              <h4>Join Us on Our Journey</h4>
              <p>
                Thank you for choosing S-Mart as your preferred online shopping
                destination. We invite you to join us on this exciting journey
                as we continue to expand our product offerings, enhance your
                shopping experience, and exceed your expectations.
              </p>
              <p className="fs-5 text-muted fw-bold text-center">
                Happy shopping at S-Mart!🥰😄
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
