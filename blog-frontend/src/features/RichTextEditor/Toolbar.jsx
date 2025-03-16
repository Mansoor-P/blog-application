import React from "react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaQuoteLeft,
  FaListOl,
  FaListUl,
  FaCode,
  FaUnderline,
  FaLink,
  FaImage,
} from "react-icons/fa";

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  const toolbarButtons = [
    { icon: FaBold, action: "toggleBold", name: "bold" },
    { icon: FaItalic, action: "toggleItalic", name: "italic" },
    { icon: FaUnderline, action: "toggleUnderline", name: "underline" },
    { icon: FaStrikethrough, action: "toggleStrike", name: "strike" },
    { icon: FaQuoteLeft, action: "toggleBlockquote", name: "blockquote" },
    { icon: FaCode, action: "toggleCodeBlock", name: "codeBlock" },
    { icon: FaListOl, action: "toggleOrderedList", name: "orderedList" },
    { icon: FaListUl, action: "toggleBulletList", name: "bulletList" },
    { icon: FaLink, action: "setLink", promptText: "Enter URL" },
    { icon: FaImage, action: "setImage", promptText: "Enter Image URL" },
  ];

  const handleButtonClick = (action, promptText) => {
    if (promptText) {
      const input = prompt(promptText);
      if (input) editor.chain().focus()[action]({ href: input }).run();
    } else {
      editor.chain().focus()[action]().run();
    }
  };

  return (
    <div className="flex flex-wrap gap-2 p-3 bg-gray-100 rounded-lg border shadow-sm">
      {toolbarButtons.map(({ icon: Icon, action, name, promptText }) => (
        <button
          key={name}
          type="button"
          onClick={() => handleButtonClick(action, promptText)}
          className={`p-2 rounded text-lg ${
            editor.isActive(name) ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
