import {
  FaEnvelopeOpenText,
  FaListAlt,
  FaUserCheck,
  FaHeadset,
} from "react-icons/fa";
import displayImg from "../../assets/display.jpg";
const WhatWeOffer = () => {
  const offers = [
    { icon: <FaListAlt className="text-sky-600" />, title: "Listing" },
    {
      icon: <FaEnvelopeOpenText className="text-sky-600" />,
      title: "Email & SMS Alerts",
    },
    {
      icon: <FaUserCheck className="text-sky-600" />,
      title: "Profile Matching",
    },
    { icon: <FaHeadset className="text-sky-600" />, title: "Support" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="flex justify-center">
          <img
            src={displayImg}
            alt="Mobile App Display"
            className="w-64 sm:w-80 md:w-96 lg:w-[400px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What <span className="text-red-500">We Offer</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Connecting opportunity seekers with opportunity providers using a
            robust search engine.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <div className="mr-4 text-2xl">{offer.icon}</div>
                <p className="text-gray-800 dark:text-white font-medium">
                  {offer.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
