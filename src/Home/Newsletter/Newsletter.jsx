import React from "react";

const Newsletter = () => {
  return (
    <section className=" py-16 px-6 rounded-lg text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#D7263D] mb-4">
        Stay Updated
      </h2>
      <p className="text-gray-700 mb-6">
        Subscribe to our newsletter to get the latest updates on blood donation
        drives, blog posts, and urgent requests.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D7263D]"
        />
        <button className="px-6 py-3 gradient-red text-white font-semibold rounded-lg
         hover:bg-[#B71C1C] transition cursor-pointer">
          Subscribe
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-4">
        We respect your privacy. No spam ever.
      </p>
    </section>
  );
};

export default Newsletter;
