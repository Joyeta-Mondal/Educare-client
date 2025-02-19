import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FrequentlyAskedQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How Can I Check The Eligibility Criteria?",
      answer:
        "You can check the eligibility criteria by visiting the scholarship details page and reviewing the listed requirements.",
    },
    {
      question: "How Will I Know If I Have Been Selected?",
      answer:
        "You will receive an email notification and can also check your application status on your profile dashboard.",
    },
    {
      question: "Are The Scholarships Listed On Your Portal Genuine?",
      answer:
        "Yes, all scholarships listed are verified and come from trusted sources. We ensure the authenticity of every opportunity.",
    },
    {
      question: "When Will I Receive The Scholarship?",
      answer:
        "Scholarship disbursement timelines vary depending on the provider. You can check the timeline details on the scholarship page.",
    },
    {
      question: 'How Does "The Global Scholarship" Differ From Others?',
      answer:
        "The Global Scholarship offers unique benefits such as mentorship, networking opportunities, and additional support for recipients.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-purple-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Do you need some help with something or do you have questions on some
          features?
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
          >
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold text-purple-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </span>
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-t border-gray-200 dark:border-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQs;
