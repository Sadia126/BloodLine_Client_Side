import React, { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import {
  FaUserShield,
  FaTint,
  FaSearchLocation,
  FaChartLine,
  FaRegNewspaper,
  FaDonate,
} from "react-icons/fa";

const Features = () => {
  const [showAll, setShowAll] = useState(false);

  const features = [
    {
      Icon: <FaUserShield />,
      title: "Role-Based Access",
      description:
        "Admin, Donor, and Volunteer roles with secure, permission-based controls.",
    },
    {
      Icon: <FaTint />,
      title: "Blood Donation Requests",
      description:
        "Create and manage donation requests with details like blood group, location, and urgency.",
    },
    {
      Icon: <FaSearchLocation />,
      title: "Find Donors Easily",
      description:
        "Search for donors by blood group, district, or upazila with advanced filtering.",
    },
    {
      Icon: <FaChartLine />,
      title: "Donation Analytics",
      description:
        "Track donation request trends and monitor activity with powerful admin dashboards.",
    },
    {
      Icon: <FaRegNewspaper />,
      title: "Blog & Awareness",
      description:
        "Admins and volunteers can publish blogs to spread awareness and guide the community.",
    },
    {
      Icon: <FaDonate />,
      title: "Funding & Support",
      description:
        "Secure Stripe integration for donations. Admins can manage and track all funding.",
    },
  ];

  // Show 3 initially, show all if "See More" clicked
  const displayedFeatures = showAll ? features : features.slice(0, 3);

  return (
    <div className="text-white p-10 my-7 rounded-lg ">
      <SectionTitle
        title={"Bloodline Features"}
        subTitle={
          "Connecting donors and recipients through a secure, transparent, and efficient blood donation platform."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
        {displayedFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="card bg-white hover:bg-[#fdd5d5] shadow-md transition-transform 
            duration-300 hover:scale-105 cursor-pointer rounded-xl"
          >
            <figure className="px-10 pt-10">
              <div className="text-4xl text-[#D7263D]">{feature.Icon}</div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#D7263D]">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-lg gradient-red text-white cursor-pointer
           transition"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Features;
