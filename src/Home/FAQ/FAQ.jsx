import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FAQ = () => {
  return (
    <section className="py-16  px-4 md:px-10 rounded-lg">
      <SectionTitle
        title={"Frequently Asked Questions"}
        subTitle={
          "Get answers to common queries about Bloodline, blood donations, and how our platform helps donors and recipients connect safely and efficiently."
        }
      />

      {/* Q1 */}
      <div className="collapse collapse-arrow bg-white border border-[#D7263D] mt-8 rounded-lg shadow-md">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title font-semibold text-[#D7263D]">
          How do I register as a donor?
        </div>
        <div className="collapse-content text-gray-700 text-sm">
          <p>
            Click on the "Register as Donor" button, fill in your personal
            details, blood group, and contact info. After submitting, your
            profile will be verified by our team before you start receiving
            donation requests.
          </p>
        </div>
      </div>

      {/* Q2 */}
      <div className="collapse collapse-arrow bg-white border border-[#D7263D] mt-4 rounded-lg shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-[#D7263D]">
          Can I search for donors in my area?
        </div>
        <div className="collapse-content text-gray-700 text-sm">
          <p>
            Yes! Use the "Find Donor" feature to search for compatible donors by
            blood group, district, and upazila. Our platform shows available
            donors nearby to help you request blood quickly.
          </p>
        </div>
      </div>

      {/* Q3 */}
      <div className="collapse collapse-arrow bg-white border border-[#D7263D] mt-4 rounded-lg shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-[#D7263D]">
          How are donation requests managed?
        </div>
        <div className="collapse-content text-gray-700 text-sm">
          <p>
            Donors and volunteers can create donation requests specifying blood
            group, location, and urgency. Admins monitor and approve requests to
            ensure safe and reliable blood distribution.
          </p>
        </div>
      </div>

      {/* Q4 */}
      <div className="collapse collapse-arrow bg-white border border-[#D7263D] mt-4 rounded-lg shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-[#D7263D]">
          Is my personal information safe on Bloodline?
        </div>
        <div className="collapse-content text-gray-700 text-sm">
          <p>
            Absolutely! Bloodline uses secure authentication with JWT and
            protects sensitive user data. Only verified donors, volunteers, and
            admins have access to relevant donation information.
          </p>
        </div>
      </div>

      {/* Q5 */}
      <div className="collapse collapse-arrow bg-white border border-[#D7263D] mt-4 rounded-lg shadow-md">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-[#D7263D]">
          How can I contribute funds to support Bloodline?
        </div>
        <div className="collapse-content text-gray-700 text-sm">
          <p>
            Navigate to the "Fund" section and use our secure Stripe integration
            to donate. Admins can track donations, and your contribution helps
            maintain the platform and support urgent blood requests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
