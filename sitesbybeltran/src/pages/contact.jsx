import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    country: 'US',
    message: '',
    agreeToPolicy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Top background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>

        {/* Main content */}
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Me</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Get in touch to discuss your needs.</p>
          </div>
          
          <div className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-left text-sm leading-6 font-semibold text-gray-900">First name</label>
                <div className="mt-2.5">
                  <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-700" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-left text-sm leading-6 font-semibold text-gray-900">Last name</label>
                <div className="mt-2.5">
                  <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-700" 
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="company" className="text-left block text-sm leading-6 font-semibold text-gray-900">Company</label>
                <div className="mt-2.5">
                  <input 
                    type="text" 
                    name="company" 
                    id="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-700" 
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-left text-sm leading-6 font-semibold text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-700" 
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="phoneNumber" className="block text-left text-sm leading-6 font-semibold text-gray-900">Phone number</label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-rose-700">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                      <select 
                        id="country" 
                        name="country" 
                        value={formData.country}
                        onChange={handleInputChange}
                        aria-label="Country" 
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-700 sm:text-sm sm:leading-6"
                      >
                        <option value="US">US</option>
                        <option value="CA">CA</option>
                        <option value="EU">EU</option>
                      </select>
                      <svg className="pointer-events-none col-start-1 row-start-1 mr-2 h-5 w-5 self-center justify-self-end text-gray-500 sm:h-4 sm:w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      name="phoneNumber" 
                      id="phoneNumber" 
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" 
                      placeholder="123-456-7890" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-left text-sm leading-6 font-semibold text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-700"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <button 
                    type="button" 
                    onClick={() => setFormData(prev => ({ ...prev, agreeToPolicy: !prev.agreeToPolicy }))}
                    className={`flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 ${formData.agreeToPolicy ? 'bg-rose-700' : 'bg-gray-200'}`} 
                    role="switch" 
                    aria-checked={formData.agreeToPolicy} 
                    aria-labelledby="switch-1-label"
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span 
                      aria-hidden="true" 
                      className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${formData.agreeToPolicy ? 'translate-x-3.5' : 'translate-x-0'}`}
                    ></span>
                  </button>
                </div>
                <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                  By selecting this, you agree to our{' '}
                  <a href="#" className="font-semibold text-rose-700">privacy policy</a>.
                </label>
              </div>
            </div>
            
            <div className="mt-10">
              <button 
                type="submit" 
                onClick={handleSubmit}
                className="block w-full rounded-md bg-rose-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's talk
              </button>
            </div>
          </div>
        </div>

        {/* Middle background decoration */}
        <div className="absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[50rem] -translate-x-1/2 bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-20 sm:left-[calc(50%-25rem)] sm:w-[60rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>

        {/* Bottom background decoration */}
        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div 
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-25 sm:left-[calc(50%+20rem)] sm:w-[60rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>
      </div>
    </div>
  );
}