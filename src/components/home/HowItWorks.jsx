import { motion } from "framer-motion";
import { FaUserPlus, FaBell } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const steps = [
  {
    icon: <FaUserPlus className="text-4xl sm:text-5xl text-white" />,
    title: "Register",
    description:
      "Sign up now for free to never miss an opportunity. Tons of opportunities are waiting for you.",
  },
  {
    icon: <MdVerified className="text-4xl sm:text-5xl text-white" />,
    title: "Update profile",
    description:
      "Once registered, ensure your profile is complete and select your preferred notification categories.",
  },
  {
    icon: <FaBell className="text-4xl sm:text-5xl text-white" />,
    title: "Sit back",
    description:
      "Relax and let the opportunities come to you. We’ll notify you of every relevant opportunity, and if you need assistance, we’re just a message away.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          How It Works
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-base sm:text-lg">
          We’ve made it easier than ever to access life-changing opportunities.
          Just follow these 3 simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-sky-400 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 shadow-md">
              {step.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
