import { useRef } from "react";
import partnerImg1 from "../../assets/unnamed.jpg";
import partnerImg2 from "../../assets/images.jpg";
import partnerImg3 from "../../assets/download.jpg";
import partnerImg4 from "../../assets/trinity.jpg";
import partnerImg5 from "../../assets/oxford.jpg";
import partnerImg6 from "../../assets/harvard.jpg";
import partnerImg7 from "../../assets/princeton.jpg";

const partners = [
  {
    logo: partnerImg1,
    name: "MIT",
    description:
      "Empowering students with cutting-edge educational tools and resources.",
  },
  {
    logo: partnerImg5,
    name: "University of Oxford",
    description:
      "Empowering students with cutting-edge educational tools and resources.",
  },
  {
    logo: partnerImg2,
    name: "University of Michigan",
    description:
      "Offering premium skill development courses and certification programs.",
  },
  {
    logo: partnerImg7,
    name: "Princeton University",
    description:
      "Offering premium skill development courses and certification programs.",
  },
  {
    logo: partnerImg6,
    name: "Harvard University",
    description:
      "Offering premium skill development courses and certification programs.",
  },
  {
    logo: partnerImg3,
    name: "Cambridge University",
    description:
      "Connecting students with top internship and job opportunities worldwide.",
  },
  {
    logo: partnerImg4,
    name: "Trinity College",
    description:
      "Supporting students with scholarships and academic counseling services.",
  },
];

// Duplicate the array for seamless infinite scrolling
const extendedPartners = [...partners, ...partners];

const OurPartners = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Our Partners & Collaborators
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          We’re proud to collaborate with leading universities to bring the best
          opportunities to our students.
        </p>
      </div>

      <div
        className="relative flex overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={marqueeRef}
          className="flex animate-marquee space-x-6"
          style={{ minWidth: "200%" }}
        >
          {extendedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-60 md:w-64 lg:w-72 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 sm:h-20 w-24 sm:w-32 object-contain mb-4"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurPartners;
