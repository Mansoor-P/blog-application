import React from "react";

const PublishCheckbox = ({ formData, setFormData }) => {
  return (
    <div className="flex justify-between">
      <label className="flex items-center">
        <input
          type="checkbox"
          name="status"
          checked={formData.status === "PUBLISHED"}
          onChange={() => setFormData((prev) => ({ ...prev, status: prev.status === "DRAFT" ? "PUBLISHED" : "DRAFT" }))}
          className="mr-2"
        />
        Publish Now
      </label>
      <span className="text-gray-500">Estimated Read Time: {formData.readTime} min</span>
    </div>
  );
};

export default PublishCheckbox;
