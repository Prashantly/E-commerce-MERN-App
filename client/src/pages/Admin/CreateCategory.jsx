import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import CategoryForm from "../../components/Forms/CategoryForm";
import { Modal } from "antd";
import "../../styles/CreateCategory.css";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // ********************** ||Handle create category|| *****************************************
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/category/create-category", {
        name: name,
      });
      if (response?.data?.success) {
        const name = response?.data?.category?.name;
        toast.success(`${name} category has been created successfully!!👍👍`, {
          style: {
            backgroundColor: "#51B749",
            fontWeight: "600",
            color: "#fff",
          },
        });
        setName("");
        getAllCategory();
      }
    } catch (error) {
      console.log("Error***", error);
      toast.error(error?.response?.data?.message, {
        style: {
          backgroundColor: "#BD282B",
          fontWeight: "600",
          color: "#fff",
        },
      });
    }
  };

  // ********************** ||Get All Categories|| *****************************************
  const getAllCategory = async () => {
    try {
      const response = await axios.get("/api/v1/category/get-category");

      const data = response?.data;
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting all categories😮");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // ********************** ||handle UPDATE category|| *****************************************
  const handleUpdate = async function (e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        {
          name: updatedName,
        }
      );

      if (response.data && response.data.success) {
        const name = response.data.category.name;
        toast.success(`${name} category has been updated successfully!👍`, {
          style: {
            backgroundColor: "#51B749",
            fontWeight: "600",
            color: "#fff",
          },
        });
        setSelected(null);
        setUpdatedName("");
        setIsModalOpen(false);
        getAllCategory();
      }
    } catch (error) {
      console.log("Error***", error);
      toast.error(error.response.data.message, {
        style: {
          backgroundColor: "#BD282B",
          fontWeight: "600",
          color: "#fff",
        },
      });
    }
  };

  // ********************** ||handle DELETE category|| *****************************************
  const handleDelete = async function (e, categoryId) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `/api/v1/category/delete-category/${categoryId}`
      );

      if (response.data && response.data.success) {
        toast.success(response.data.message, {
          style: {
            backgroundColor: "#51B749",
            fontWeight: "600",
            color: "#fff",
          },
        });

        getAllCategory();
      }
    } catch (error) {
      console.log("Error***", error);
      toast.error(error.response.data.message, {
        style: {
          backgroundColor: "#BD282B",
          fontWeight: "600",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Layout title={"Dashborad | Create Category"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card category-card">
              <div className="card-header">
                <h2>Manage Categories</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5">
                    <CategoryForm
                      handleSubmit={handleSubmit}
                      value={name}
                      setValue={setName}
                    />
                  </div>
                  <div className="col-md-7">
                    <table className="table category-table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories?.map((category) => (
                          <tr key={category._id}>
                            <td className="text-capitalize fs-5">
                              {category?.name}
                            </td>
                            <td>
                              <button
                                className="btn btn-primary ms-2"
                                onClick={() => {
                                  setIsModalOpen(true);
                                  setUpdatedName(category.name);
                                  setSelected(category);
                                }}
                              >
                                <FiEdit className="fs-4" />
                              </button>
                              <button
                                className="btn btn-danger ms-2"
                                onClick={(e) => handleDelete(e, category._id)}
                              >
                                <RiDeleteBinLine className="fs-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              open={isModalOpen}
              footer={null}
              onCancel={() => setIsModalOpen(false)}
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
