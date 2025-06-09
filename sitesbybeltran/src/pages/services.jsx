import ServiceCard from "../components/service_card";

export default function Service() {
    const servicePlans = [
    {
      title: "Monthly Package",
      one_time_price: "0",
      monthly_price: "150",
      features: [
        { name: "Custom Website Design", included: true },
        { name: "Hosting Included", included: true },
        { name: "Unlimited Edits", included: true },
        { name: "24/7 support", included: true },
        { name: "Mobile-Responsive", included: true },
        { name: "Full Ownership of Website", included: false },
      ],
      buttonText: "More Details"
    },
    {
      title: "One-Time/Hosting Package",
      one_time_price: "1500",
      monthly_price: "25",
      features: [
        { name: "Custom Website Design", included: true },
        { name: "Hosting Included", included: true },
        { name: "Basic SEO Optimization", included: true },
        { name: "Edit Support Available ($50/hr)", included: true },
        { name: "Mobile-Responsive", included: true },
        { name: "Full Ownership of Website", included: true },
      ],
      buttonText: "More Details"
    }
  ];

    return (
        <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {servicePlans.map((plan, index) => (
                    <ServiceCard
                    key={index}
                    title={plan.title}
                    one_time_price={plan.one_time_price}
                    monthly_price={plan.monthly_price}
                    features={plan.features}
                    buttonText={plan.buttonText} 
                    />
                ))}
                </div>
            </div>
        </div>
      </div>
    </div>
    );
}