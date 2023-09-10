import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{ marginTop: "85px", minHeight: "80vh" }}>{children}</main>
        <Footer />
      </HelmetProvider>
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - S-Mart",
  description: "Ecommerce Mern project",
  keywords: "mern,react,node,express,mongodb,ecommerce",
  author: "Prashant Y",
};

export default Layout;
