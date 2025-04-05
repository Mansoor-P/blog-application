import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaUsers, FaBlog, FaUserShield } from "react-icons/fa";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  let user;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error("Invalid user data:", error);
  }

  useEffect(() => {
    if (!user || user.role !== "ADMIN") {
      navigate("/");
    } else {
      fetchUsers();
      fetchBlogs();
    }
  }, [user, navigate]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/v1/auth/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/v1/blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const confirmDelete = (id, type) => {
    setDeleteTarget({ id, type });
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;

    try {
      if (deleteTarget.type === "user") {
        await fetch(`/api/v1/auth/${deleteTarget.id}`, { method: "DELETE" });
        setUsers(users.filter((u) => u.id !== deleteTarget.id));
      } else {
        await fetch(`/api/v1/blogs/${deleteTarget.id}`, { method: "DELETE" });
        setBlogs(blogs.filter((b) => b.id !== deleteTarget.id));
      }
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
        <FaUserShield /> Admin Dashboard
      </h2>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold">Confirm Deletion</h3>
            <p className="text-gray-600">
              Are you sure you want to delete this item?
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <FaUsers /> All Users
        </h3>
        <div className="bg-white shadow-md rounded-lg p-4">
          {users.length === 0 ? (
            <p className="text-gray-600">No users found.</p>
          ) : (
            <table className="w-full border-collapse border border-gray-200 mt-2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Username</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border">
                    <td className="p-2">{u.id}</td>
                    <td className="p-2">{u.username}</td>
                    <td className="p-2">{u.email}</td>
                    <td className="p-2 text-center">
                      <button
                        onClick={() => confirmDelete(u.id, "user")}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
