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
import ProtectedRoute from "../routes/ProtectedRoute";

import Contact from "../pages/Contact";
import Terms from "../pages/legal/Terms";
import Privacy from "../pages/legal/Privacy";
import Help from "../pages/legal/Help";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes with user data */}
        <Route
          path="/user/:username"
          element={
            <ProtectedRoute>
              {(user) => <UserProfile user={user} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              {(user) => <AdminProfile user={user} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/post-blog"
          element={
            <ProtectedRoute>
              {(user) => <BlogPost user={user} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/edit-profile"
          element={
            <ProtectedRoute>
              {(user) => <EditProfile user={user} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/my-blogs"
          element={
            <ProtectedRoute>
              {(user) => <UserBlogs user={user} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:username/change-password"
          element={
            <ProtectedRoute>
              {(user) => <ChangePassword user={user} />}
            </ProtectedRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
