import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";

// Define form validation schema using Zod
const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  passwordHash: z.string().min(6, "Password must be at least 6 characters"),
  displayName: z.string().optional(),
  bio: z.string().max(150, "Bio should not exceed 150 characters").optional(),
  profilePictureUrl: z.string().url("Invalid URL").optional(),
  socialLinks: z.record(z.string().url()).optional(), // Change from string to an object
  role: z.enum(["USER", "ADMIN"]).default("USER"),
});

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Parse socialLinks field from string to object
      if (data.socialLinks) {
        try {
          data.socialLinks = JSON.parse(data.socialLinks);
        } catch (error) {
          console.error("Invalid JSON format for socialLinks");
          alert("Please enter valid JSON format for social links.");
          setLoading(false);
          return;
        }
      }

      await registerUser(data);
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("username")}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            {...register("passwordHash")}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.passwordHash && (
            <p className="text-red-500 text-sm">
              {errors.passwordHash.message}
            </p>
          )}

          <input
            {...register("displayName")}
            placeholder="Display Name (Optional)"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <textarea
            {...register("bio")}
            placeholder="Short Bio (Optional)"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            {...register("profilePictureUrl")}
            placeholder="Profile Picture URL (Optional)"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          <input
            {...register("socialLinks")}
            placeholder="Social Links (Optional)"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />

          {/* Role Selection */}
          <select
            {...register("role")}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
