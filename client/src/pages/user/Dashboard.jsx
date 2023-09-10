import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"User Dashboard - S-Mart"}>
      <div class="container-fluid p-3" style={styles.containerStyle}>
        <div class="row">
          <div class="col-md-3">
            <UserMenu />
          </div>
          <div class="col-md-9">
            <div class="user-details" style={{ padding: "20px" }}>
              <div class="card custom-card" style={styles.customCardStyle}>
                <h4 style={styles.textStyle}>
                  User Name:{" "}
                  <span class="text-primary">{auth?.user?.name}</span>
                </h4>
                <h4 style={styles.textStyle}>
                  User Email:{" "}
                  <span class="text-primary">{auth?.user?.email}</span>
                </h4>
                <h4 style={styles.textStyle}>
                  User Address:{" "}
                  <span class="text-primary">{auth?.user?.address}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  containerStyle: {
    minHeight: "72.8vh",
  },
  customCardStyle: {
    backgroundColor: "#f7f7f7",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
  },
  textStyle: {
    color: "#333",
  },

  userDetailStyle: {
    padding: "20px",
  },
};

export default Dashboard;
