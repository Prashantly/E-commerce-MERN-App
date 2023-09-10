import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title="Admin Dashboard - S-Mart">
      <div className="container-fluid" style={{ minHeight: "68.8vh" }}>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="admin-details-card">
              <h1 className="admin-details-heading">Admin Details</h1>
              <div className="admin-details-body">
                <div className="admin-detail">
                  <h4 className="admin-detail-label">Admin Name:</h4>
                  <p className="admin-detail-value">{auth?.user?.name}</p>
                </div>
                <div className="admin-detail">
                  <h4 className="admin-detail-label">Admin Email:</h4>
                  <p className="admin-detail-value">{auth?.user?.email}</p>
                </div>
                <div className="admin-detail">
                  <h4 className="admin-detail-label">Admin Contact Info:</h4>
                  <p className="admin-detail-value">{auth?.user?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
