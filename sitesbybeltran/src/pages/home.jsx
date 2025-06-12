import React, { useState } from 'react';
import { ArrowRight, Code, Zap, Shield, Smartphone, Search, TrendingUp } from 'lucide-react';

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Development",
      description: "Hand-coded websites built from scratch, no templates or cookie-cutter solutions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for speed with 90+ PageSpeed scores that keep visitors engaged."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First",
      description: "Responsive designs that look perfect on every device, from phones to desktops."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Ready",
      description: "Built with search engines in mind to help your business get found online."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Modern security practices and reliable hosting recommendations included."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Focused",
      description: "Designed to convert visitors into customers and grow with your business."
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "We discuss your vision, goals, and requirements" },
    { step: "02", title: "Design", description: "I create mockups and get your feedback" },
    { step: "03", title: "Develop", description: "Your site comes to life with clean, modern code" },
    { step: "04", title: "Deploy", description: "Launch your new website and watch your business grow" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div 
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                        style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
                    ></div>
                </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700 ring-1 ring-inset ring-rose-700/10">
                🚀 Now accepting new projects
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
             SitesByBeltran
              Custom Websites That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">
                Drive Results
              </span>
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              I design and build beautiful, fast, and conversion-focused websites that help your business stand out online and attract more customers.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/services" 
                className="group inline-flex items-center rounded-lg bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-rose-500 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/portfolio" 
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                View My Work
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Fast 7-14 day delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Unlimited revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>100% custom code</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom gradient background */}
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div 
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" 
                        style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
                    ></div>
                </div>
        
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Custom Development?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Unlike template-based solutions, custom websites are built specifically for your business needs and goals.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-rose-200 cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-300 ${
                    hoveredFeature === index ? 'bg-rose-600 text-white' : 'bg-rose-100 text-rose-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple Process, Amazing Results
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              From initial consultation to launch, I make the process smooth and transparent.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-500 to-orange-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-rose-100">
              Let's discuss your project and create a website that helps your business grow. 
              Free consultation, no strings attached.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-rose-600 shadow-sm hover:bg-rose-50 transition-colors duration-200"
              >
                Get Free Consultation
              </a>
              <a
                href="/services"
                className="rounded-lg border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-rose-600 transition-colors duration-200"
              >
                View Services & Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}