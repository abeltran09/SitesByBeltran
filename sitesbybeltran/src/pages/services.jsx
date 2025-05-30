import ServiceCard from "../components/service_card";

export default function Service() {
    const servicePlans = [
    {
      title: "Basic Package",
      one_time_price: "350",
      monthly_price: "80",
      features: [
        { name: "Full Custom Web Design", included: true },
        { name: "1 Page Layout", included: true },
        { name: "Mobile Responsive Design", included: true },
        { name: "Hosting Setup", included: true },
        { name: "Choose Web Name", included: true },
        { name: "Contact Form", included: true },
        { name: "3 Month Basic Support", included: true },
      ],
      buttonText: "Choose Plan"
    },
    {
      title: "Standard Package",
      one_time_price: "650",
      monthly_price: "80",
      features: [
        { name: "Full Custom Web Design", included: true },
        { name: "Up to 5 page Layout", included: true },
        { name: "Mobile-Responsive", included: true },
        { name: "Hosting Setup", included: true },
        { name: "Contact Form", included: true },
        { name: "SEO Optimization", included: true },
        { name: "6 Months  of Support", included: true }
      ],
      buttonText: "Choose Plan"
    },
    {
      title: "Premium Package",
      one_time_price: "950",
      monthly_price: "80",
      features: [
        { name: "Full Custom Web Design", included: true },
        { name: "Unlimited Number of Pages", included: true },
        { name: "Mobile-Responisive", included: true },
        { name: "Contact Forms", included: true },
        { name: "Google Analytics Setup", included: true },
        { name: "SEO Setup", included: true },
        { name: "1-Year of Support", included: true }
      ],
      buttonText: "Choose Plan"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 sm:py-16 lg:py-20">
                {servicePlans.map((plan, index) => (
                    <ServiceCard
                        key={index}
                        title={plan.title}
                        one_time_price={plan.one_time_price}
                        monthly_price={plan.monthly_price}
                        features={plan.features}
                        buttonText={plan.buttonText} />
                ))}
                
            </div>
        </div>
      </div>
    </div>
    );
}