import React from "react";
import Toolbar from "./Toolbar";
import EditorComponent from "./EditorComponent ";
import PublishCheckbox from "./PublishCheckbox ";
import Button from "../../components/Button";

const BlogForm = ({ formData, setFormData, handleSubmit, loading }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="title" placeholder="Enter your blog title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded-lg" required />

      <input type="text" name="slug" value={formData.slug} className="w-full p-3 border rounded-lg bg-gray-100" readOnly />

      <textarea name="summary" placeholder="Write a short summary..." value={formData.summary} onChange={handleChange} className="w-full p-3 border rounded-lg" required></textarea>

      <EditorComponent formData={formData} setFormData={setFormData} />

      <input type="url" name="coverImageUrl" placeholder="Cover Image URL" value={formData.coverImageUrl} onChange={handleChange} className="w-full p-3 border rounded-lg" />

      <input type="text" name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="w-full p-3 border rounded-lg" />

      <PublishCheckbox formData={formData} setFormData={setFormData} />

      <Button type="submit" text="Publish" isLoading={loading} disabled={loading} />
    </form>
  );
};

export default BlogForm;
