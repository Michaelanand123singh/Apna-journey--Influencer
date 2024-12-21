// src/components/Contact/SupportInfo.jsx
import React from 'react';

const SupportInfo = () => {
  const supportChannels = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email",
      value: "support@apnajourney.com",
      type: "email"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Talk to our team",
      value: "+1 (555) 123-4567",
      type: "phone"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with us",
      value: "Available 24/7",
      type: "chat"
    }
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Support Channels</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {supportChannels.map((channel) => (
          <div
            key={channel.title}
            className="border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="text-3xl mb-2">{channel.icon}</div>
            <h4 className="font-medium text-gray-900">{channel.title}</h4>
            <p className="text-sm text-gray-500 mb-2">{channel.description}</p>
            <p className="text-blue-600 font-medium">{channel.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportInfo;