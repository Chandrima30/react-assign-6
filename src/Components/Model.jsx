import React from "react";
import { User, Box, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: <User size={32} />,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: <Box size={32} />,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: <Rocket size={32} />,
  },
];

const StepsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl shadow-sm p-8 text-center border hover:shadow-md transition"
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                {step.id}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;