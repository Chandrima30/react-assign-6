import React from "react";

const PricingSection = () => {
  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Starter */}
          <div className="card bg-base-100 shadow-md p-6">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-sm text-gray-500">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-4">
              $0 <span className="text-sm font-normal">/month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-left">
              <li>✔ Access to free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="btn btn-primary mt-6 rounded-full">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="card shadow-lg p-6 text-white relative rounded-2xl 
                          bg-gradient-to-r from-purple-500 to-indigo-600">

            <span className="absolute top-0 left-1/2 -translate-x-1/2 
                             -translate-y-1/2 bg-yellow-400 text-black 
                             text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-sm opacity-80">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">
              $29 <span className="text-sm font-normal">/month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-left">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="btn bg-white text-purple-600 mt-6 rounded-full">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="card bg-base-100 shadow-md p-6">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-sm text-gray-500">
              For teams and businesses
            </p>

            <h2 className="text-3xl font-bold mt-4">
              $99 <span className="text-sm font-normal">/month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-left">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="btn btn-primary mt-6 rounded-full">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PricingSection;