import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

// Sample bloodline testimonials
const reviews = [
  {
    id: 1,
    name: "Rasel Ahamed",
    role: "Volunteer",
    text: "Bloodline helped me connect with local donors quickly. I was able to donate and save lives efficiently.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Awlad Hossin",
    role: "Donor",
    text: "This platform made donating blood seamless. The request notifications and donor tracking are fantastic!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "Recipient",
    text: "Thanks to Bloodline, I found a compatible blood donor in my district within hours. Truly life-saving!",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sadia Khatun",
    role: "Volunteer",
    text: "Managing donation requests and helping people has never been easier. Bloodline is amazing!",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    role: "Donor",
    text: "The dashboard shows donation stats clearly. I can track my contributions and see their impact.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else setItemsPerPage(3);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage
    );
  };

  const currentReviews = reviews.slice(activeIndex, activeIndex + itemsPerPage);

  return (
    <section className="py-16 ">
      <SectionTitle
        title={"What our users say"}
        subTitle={
          "Hear from donors, volunteers, and recipients about how Bloodline is saving lives and connecting the community."
        }
      />

      <div className="flex justify-center items-center gap-6 mt-10 relative overflow-hidden">
        {currentReviews.map((review) => (
          <div
            key={review.id}
            className="transition-all duration-500 p-6 rounded-2xl shadow-lg w-[300px] min-h-[280px] bg-white"
          >
            <p className="text-4xl text-[#D7263D] mb-2">“</p>
            <p className="text-gray-700 text-sm mb-4 border-b border-dashed pb-4">
              {review.text}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#D7263D]"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D7263D] bg-white hover:bg-[#D7263D] hover:text-white transition"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }).map(
            (_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i * itemsPerPage)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  activeIndex / itemsPerPage === i
                    ? "bg-[#D7263D]"
                    : "bg-gray-400"
                }`}
              ></span>
            )
          )}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[#D7263D] bg-white hover:bg-[#D7263D] hover:text-white transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Review;
