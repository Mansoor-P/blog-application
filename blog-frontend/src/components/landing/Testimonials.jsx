import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">What Our Readers Say</h2>
        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 shadow-lg rounded-lg w-full">
            <p className="text-lg text-gray-600">
              "This platform is incredible! I love staying updated with the
              latest articles." - Mansoor
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-full">
            <p className="text-lg text-gray-600">
              "The articles are well-written and insightful. Highly recommend!"
              - Mansoor
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg w-full">
            <p className="text-lg text-gray-600">
              "A great resource for learning new things every day!" - Mansoor
              Johnson
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
