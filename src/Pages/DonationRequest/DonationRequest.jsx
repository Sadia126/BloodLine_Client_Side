import React from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../utils/useAxiosSecure";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const DonationRequest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: requests = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["pending-donation-requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donation-requests");
      return res.data.filter((req) => req.status === "pending");
    },
    staleTime: 1000 * 60, // 1 minute
    onError: () => toast.error("Failed to load donation requests"),
  });

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-red-500">Something went wrong: {error.message}</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#D7263D] mb-8">
        Pending Blood Donation Requests 🩸
      </h2>

      {requests.length === 0 ? (
        <p className="text-center text-gray-500">No pending requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="p-5 border rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-[#D7263D] mb-2">
                {req.recipientName}
              </h4>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Location:</strong> {req.district}, {req.upazila}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Blood Group:</strong> {req.bloodGroup}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Date:</strong> {req.donationDate}
              </p>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Time:</strong> {req.donationTime}
              </p>
              <Link to={`/donation-request/${req._id}`}>
                <button className="btn btn-sm btn-primary gradient-red w-full">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationRequest;
