export default function ServiceCard({
    title, 
    one_time_price,
    monthly_price, 
    currency = "$", 
    period = "/one-time payment", 
    monthly = "/monthly",
    features = [], 
    buttonText = "Choose plan"
}) {

    return(
        

    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{title}</h5>
      
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">{currency}</span>
        <span className="text-5xl font-extrabold tracking-tight">{one_time_price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">{period}</span>
      </div>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-xl font-semibold">{currency}</span>
        <span className="text-3xl font-extrabold tracking-tight">{monthly_price}</span>
        <span className="ms-1 mt- text-xl font-normal text-gray-500 dark:text-gray-400">{monthly}</span>
      </div>
      
      <ul role="list" className="space-y-5 my-7">
        {features.map((feature, index) => (
          <li key={index} className={`flex ${feature.included ? '' : 'line-through decoration-gray-500'}`}>
            <svg 
              className={`shrink-0 w-4 h-4 ${feature.included ? 'text-rose-700 dark:text-rose-500' : 'text-gray-400 dark:text-gray-500'}`} 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className={`text-base font-normal leading-tight ms-3 ${feature.included ? 'text-gray-500 dark:text-gray-400' : 'text-gray-500'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <a href="" className="pb-5 inline-flex justify-left font-medium text-rose-600 dark:text-rose-600 hover:underline">More Details</a>
      <button type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-200 dark:bg-rose-700 dark:hover:bg-rose-600 dark:focus:bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
        {buttonText}
      </button>
    </div>
  );

}