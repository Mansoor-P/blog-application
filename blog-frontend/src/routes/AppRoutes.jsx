import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import BlogsPage from "../pages/BlogsPage";
import AboutPage from "../pages/About/AboutPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../features/profiles/UserProfile/UserProfile";
import AdminProfile from "../features/profiles/AdminProfile/AdminProfile";
import BlogPost from "../features/blogs/BlogPost/BlogPost";
import EditProfile from "../features/profiles/EditProfile/EditProfile";
import UserBlogs from "../features/profiles/UserProfile/UserBlogs";
import ChangePassword from "../features/profiles/EditProfile/ChangePassword";
import NotFound from "../pages/Notfound";
import ProtectedRoute from "../routes/ProtectedRoute"; // Fixed path

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/user/:username"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/post-blog"
          element={
            <ProtectedRoute>
              <BlogPost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/my-blogs"
          element={
            <ProtectedRoute>
              <UserBlogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
