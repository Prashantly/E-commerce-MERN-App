import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ClipLoader } from "./components/Spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Policy = lazy(() => import("./pages/Policy"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const PasswordReset = lazy(() => import("./pages/Auth/PasswordReset"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const PrivateRoute = lazy(() => import("./components/Routes/Private"));
const ProtectedRoute = lazy(() => import("./components/Routes/Protected"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const CreateCategory = lazy(() => import("./pages/Admin/CreateCategory"));
const CreateProduct = lazy(() => import("./pages/Admin/CreateProduct"));
const Profile = lazy(() => import("./pages/user/Profile"));
const MyOrders = lazy(() => import("./pages/user/MyOrders"));
const Products = lazy(() => import("./pages/Admin/Products"));
const UpdateProduct = lazy(() => import("./pages/Admin/UpdateProduct"));
const Search = lazy(() => import("./pages/Search"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Categories = lazy(() => import("./pages/Categories"));
const CategoryProduct = lazy(() => import("./pages/CategoryProduct"));
const CartPage = lazy(() => import("./pages/CartPage"));
const AdminOrders = lazy(() => import("./pages/Admin/AdminOrders"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center w-100 vh-100">
            <ClipLoader color="#000" size={35} />
            <span className="fs-4 ms-3 fw-bold">Loading...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/orders" element={<MyOrders />} />
          </Route>
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/product/:slug" element={<UpdateProduct />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/orders" element={<AdminOrders />} />
          </Route>
          <Route
            path="/forgotpassword/:id/:token"
            element={<ForgotPassword />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
