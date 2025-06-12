import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceDetailsPage() {
  const [selectedPlan, setSelectedPlan] = useState('one-time');
  const navigate = useNavigate();
  
  const serviceData = {
    title: "Premium Web Development Package",
    one_time_price: "1000",
    monthly_price: "150",
    currency: "$",
    description: "Complete web development solution with modern design, responsive layout, and advanced functionality. Perfect for businesses looking to establish a strong online presence.",
    features: [
      { name: "Custom responsive design", included: true, description: "Fully responsive website that works perfectly on all devices" },
      { name: "SEO optimization", included: true, description: "Search engine optimized content and structure" },
      { name: "Content management system", included: true, description: "Easy-to-use CMS for updating your content" },
      { name: "SSL certificate included", included: true, description: "Secure HTTPS connection for your website" },
      { name: "24/7 support for 6 months", included: true, description: "Round-the-clock technical support" },
      { name: "Advanced analytics setup", included: true, description: "Google Analytics and conversion tracking" },
      { name: "Social media integration", included: true, description: "Connect all your social media platforms" },
      { name: "E-commerce functionality", included: false, description: "Online store capabilities (available as add-on)" },
      { name: "Multi-language support", included: false, description: "Support for multiple languages (available as add-on)" }
    ],
    specifications: {
      "Development Time": "1-2 weeks",
      "Initial Consultation": "1 strategy call (30-60 mins)",
      "Design Mockups": "Landing Page mockup for approval",
      "Pages Included": "Up to 10 pages",
      "Browser Compatibility": "Tested on major browsers (Chrome, Firefox, Safari, Edge)",
      "Hosting Setup": "Included",
      "Domain Registration": "Included (.com domain)"
    }
  };

  return (
    <div className="pt-30 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Top background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>
        
        {/* Header Section */}
        <div className="p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold mb-4 text-gray-800">
              {serviceData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {serviceData.description}
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-1 flex shadow-sm">
              <button
                onClick={() => setSelectedPlan('one-time')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPlan === 'one-time'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                One-time Payment
              </button>
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedPlan === 'monthly'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Monthly Payment
              </button>
            </div>
          </div>

          {/* Pricing Display */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-3xl font-semibold text-gray-700">{serviceData.currency}</span>
              <span className="text-5xl font-extrabold tracking-tight text-gray-800">
                {selectedPlan === 'one-time' ? serviceData.one_time_price : serviceData.monthly_price}
              </span>
              <span className="ms-1 text-xl font-normal text-gray-500">
                {selectedPlan === 'one-time' ? '/one-time payment' : '/monthly'}
              </span>
            </div>
            {selectedPlan === 'monthly' ? 
              <p className="text-sm text-gray-500">
                Total project value: ${serviceData.one_time_price} • No setup fees
              </p> 
              : <p className="text-sm text-gray-500">
                Full OwnerShip Of Website • 25 Monthy Hosting Fee
              </p> 
              
            }
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button 
              type="button" 
              onClick={() => navigate('/contact')} 
              className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-lg px-8 py-3 inline-flex justify-center items-center shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Today
              <svg className="w-5 h-5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Features Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h2>
            
            <ul role="list" className="space-y-6">
              {serviceData.features.map((feature, index) => (
                <li key={index} className={`flex ${feature.included ? '' : 'opacity-60'}`}>
                  <svg 
                    className={`shrink-0 w-5 h-5 mt-0.5 ${feature.included ? 'text-rose-600' : 'text-gray-400'}`} 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                  </svg>
                  <div className="ms-5">
                    <span className={`text-base font-medium leading-tight ${feature.included ? 'text-gray-800' : 'text-gray-500 line-through decoration-gray-500'}`}>
                      {feature.name}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications Section */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Specifications</h2>
            
            <dl className="space-y-6">
              {Object.entries(serviceData.specifications).map(([key, value], index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    {key}
                  </dt>
                  <dd className="text-base font-semibold text-gray-800">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have questions about this package or need a custom solution? I am here to help you choose the perfect plan for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              type="button"
              onClick={() => navigate('/contact')} 
              className="text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-6 py-3 shadow-sm hover:shadow-md transition-all"
            >
              Start Your Project
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/contact')} 
              className="text-rose-600 bg-white border border-rose-600 hover:bg-rose-50 focus:ring-4 focus:outline-none focus:ring-rose-200 font-medium rounded-lg text-sm px-6 py-3 shadow-sm hover:shadow-md transition-all"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
        {/* Middle background decoration */}
        <div className="absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-10 sm:left-[calc(50%-25rem)] sm:w-[60rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>

        {/* Bottom background decoration */}
        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div 
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-12 sm:left-[calc(50%+20rem)] sm:w-[60rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>
      </div>
    </div>
  );
}