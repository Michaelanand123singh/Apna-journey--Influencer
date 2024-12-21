// src/components/Contact/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get started with Apna Journey?",
      answer: "Getting started is easy! Simply create an account, complete your profile, and you can begin exploring influencer partnerships or brand collaborations right away."
    },
    {
      question: "What types of influencers are on your platform?",
      answer: "We have influencers across various niches including lifestyle, fashion, tech, gaming, food, travel, and more. Our influencers range from micro-influencers to major content creators."
    },
    {
      question: "How do you ensure the quality of influencers?",
      answer: "We have a thorough vetting process that includes engagement rate analysis, content quality review, and audience authenticity verification."
    },
    {
      question: "What are your pricing plans?",
      answer: "We offer flexible pricing plans tailored to different business needs. Contact our sales team for detailed pricing information."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white shadow-sm rounded-lg divide-y">
      {faqs.map((faq, index) => (
        <div key={index} className="p-6">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left"
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            <span className="ml-6 flex-shrink-0">
              {openIndex === index ? (
                <span className="text-blue-500">−</span>
              ) : (
                <span className="text-gray-400">+</span>
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-2">
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;