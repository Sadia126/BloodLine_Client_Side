import React from "react";
import { FaHandHoldingHeart, FaUserPlus, FaHeartbeat } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      Icon: <FaUserPlus />,
      title: "Register as Donor",
      description:
        "Sign up as a donor to share your blood group and location. It's quick and simple!",
    },
    {
      Icon: <FaHandHoldingHeart />,
      title: "Create Donation Request",
      description:
        "Volunteers or donors can create a blood donation request with all necessary details.",
    },
    {
      Icon: <FaHeartbeat />,
      title: "Save Lives",
      description:
        "Find matching donors, fulfill requests, and contribute to saving lives in your community.",
    },
  ];

  return (
    <section className="py-16 px-6 rounded-lg text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#D7263D] mb-4">
        How Bloodline Works
      </h2>
      <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        A simple 3-step process that connects donors with recipients efficiently
        and safely.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-8 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="flex justify-center items-center text-5xl text-[#D7263D] mb-4">
              {step.Icon}
            </div>
            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
