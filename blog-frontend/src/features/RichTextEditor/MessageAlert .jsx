import React from "react";

const MessageAlert = ({ message }) => {
  if (!message.text) return null;

  return (
    <div className={`text-lg text-center font-semibold ${message.type === "success" ? "text-green-600" : "text-red-500"}`}>
      {message.text}
    </div>
  );
};

export default MessageAlert;
