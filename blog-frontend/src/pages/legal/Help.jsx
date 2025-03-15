import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqs from "../../data/faqs";

const HelpPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">How can we help?</h1>

      <div className="grid gap-6">
        {faqs.map((section, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <button
              className="flex justify-between items-center w-full text-lg font-semibold p-2"
              onClick={() => toggleCategory(index)}
            >
              {section.category}
              {openCategory === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openCategory === index && (
              <ul className="mt-2 space-y-2">
                {section.questions.map((faq, i) => (
                  <li key={i} className="p-2 border-b">
                    <strong>{faq.q}</strong>
                    <p className="text-gray-600">{faq.a}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpPage;
