import React, { useState, useEffect } from 'react';
import { Scissors, Clock, Star, MapPin, Phone, Menu, X } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import {  FiFacebook } from 'react-icons/fi'

export default function BarbershopLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Classic Cut', price: '$25', duration: '30 min' },
    { name: 'Beard Trim', price: '$15', duration: '20 min' },
    { name: 'Hot Towel Shave', price: '$35', duration: '45 min' },
    { name: 'Wash & Style', price: '$30', duration: '40 min' }
  ];

  const reviews = [
    { name: 'Mike Johnson', rating: 5, text: 'Best cut I\'ve had in years. The attention to detail is incredible.' },
    { name: 'David Chen', rating: 5, text: 'Professional service and great atmosphere. Highly recommend!' },
    { name: 'Alex Rivera', rating: 5, text: 'Tony is a master of his craft. Always leave looking sharp.' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-amber-400 rotate-45" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                PRIME CUTS
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-amber-400 transition-colors duration-300">Home</a>
              <a href="#services" className="hover:text-amber-400 transition-colors duration-300">Services</a>
              <a href="#about" className="hover:text-amber-400 transition-colors duration-300">About</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">Contact</a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:text-amber-400 transition-colors">Home</a>
              <a href="#services" className="block px-3 py-2 hover:text-amber-400 transition-colors">Services</a>
              <a href="#about" className="block px-3 py-2 hover:text-amber-400 transition-colors">About</a>
              <a href="#contact" className="block px-3 py-2 hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-orange-900/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-pulse">
            <Scissors className="h-20 w-20 text-amber-400 mx-auto mb-6 rotate-45" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            PRIME CUTS
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Where tradition meets modern style. Experience the art of grooming at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold py-4 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
              Book Appointment
            </button>
            <button className="border-2 border-amber-400 text-amber-400 font-bold py-4 px-8 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300">
              View Services
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400">Premium grooming services tailored for the modern gentleman</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-amber-500 group"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Scissors className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
                  <p className="text-3xl font-bold text-amber-400 mb-2">{service.price}</p>
                  <div className="flex items-center justify-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Master Craftsmanship
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With over 15 years of experience, our master barbers combine traditional techniques with modern styling to deliver exceptional results. Every cut is a work of art, every shave a moment of luxury.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe in the power of a great haircut to transform not just your appearance, but your confidence. Step into our shop and experience the difference that true craftsmanship makes.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">5K+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">4.9</div>
                  <div className="text-gray-400">Star Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-full h-96 rounded-3xl opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                <Scissors className="h-32 w-32 text-amber-400 rotate-45 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <p className="text-amber-400 font-semibold">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-400">Experience the Prime Cuts difference</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Location</h3>
                  <p className="text-gray-400">123 Main Street, Downtown City, ST 12345</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Phone</h3>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Hours</h3>
                  <div className="text-gray-400">
                    <p>Mon-Fri: 9AM-7PM</p>
                    <p>Saturday: 9AM-6PM</p>
                    <p>Sunday: 10AM-4PM</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="#" className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <FaInstagram className="h-6 w-6 text-black" />
                </a>
                <a href="#" className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <FiFacebook className="h-6 w-6 text-black" />
                </a>
                <a href="#" className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-full hover:scale-110 transition-transform duration-300">
                  <FaTiktok className="h-6 w-6 text-black" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Book Your Appointment</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none text-white placeholder-gray-400"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none text-white placeholder-gray-400"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none text-white placeholder-gray-400"
                />
                <select className="w-full p-4 bg-gray-700 rounded-lg border border-gray-600 focus:border-amber-500 focus:outline-none text-white">
                  <option>Select Service</option>
                  <option>Classic Cut</option>
                  <option>Beard Trim</option>
                  <option>Hot Towel Shave</option>
                  <option>Wash & Style</option>
                </select>
                <button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold py-4 px-8 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Scissors className="h-6 w-6 text-amber-400 rotate-45" />
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              PRIME CUTS
            </span>
          </div>
          <p className="text-gray-400">© 2025 Prime Cuts Barbershop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}