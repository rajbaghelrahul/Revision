import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import UserDetails from "../Pages/UserDetails";
import Users from "../Pages/Users";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      {/* 
        path - on which path you want to show
        element - what do you want to show
      */}
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/users/:user_id"
        element={
          <PrivateRoute>
            <UserDetails />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
      {/* 
          /users/something
      */}
    </Routes>
  );
}

export default AllRoutes;
