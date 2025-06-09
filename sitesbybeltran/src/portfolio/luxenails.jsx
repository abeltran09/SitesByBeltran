import { useState, useEffect } from 'react';
import { Star, Phone, MapPin, Clock, Award, Sparkles, Heart, Users, Menu, X } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import {  FiFacebook } from 'react-icons/fi'

export default function NailSalonLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { 
      name: "Classic Manicure", 
      price: "$35", 
      description: "Perfect polish with cuticle care",
      icon: "💅"
    },
    { 
      name: "Gel Extensions", 
      price: "$65", 
      description: "Long-lasting beautiful nails",
      icon: "✨"
    },
    { 
      name: "Pedicure Deluxe", 
      price: "$45", 
      description: "Relaxing foot treatment & massage",
      icon: "🦶"
    },
    { 
      name: "Nail Art Design", 
      price: "$25+", 
      description: "Custom artistic nail designs",
      icon: "🎨"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      text: "Absolutely stunning work! My nails have never looked better. The attention to detail is incredible.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      text: "Been coming here for 2 years. Always professional, clean, and the designs are amazing!",
      rating: 5
    },
    {
      name: "Jessica Thompson",
      text: "The staff is so talented and friendly. This is my go-to place for special occasions.",
      rating: 5
    }
  ];

  const galleryImages = [
    { gradient: "from-pink-400 to-purple-500", pattern: "💎✨💅" },
    { gradient: "from-purple-400 to-pink-500", pattern: "🌸💖🦋" },
    { gradient: "from-indigo-400 to-purple-500", pattern: "⭐💫✨" },
    { gradient: "from-pink-500 to-red-500", pattern: "🌹💋❤️" },
    { gradient: "from-teal-400 to-blue-500", pattern: "🌊💙🐚" },
    { gradient: "from-yellow-400 to-pink-500", pattern: "🌺🌻🍑" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Luxe Nails
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Book Now
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100">
            <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <a 
                href="#services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2 border-b border-gray-100"
              >
                Services
              </a>
              <a 
                href="#gallery" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2 border-b border-gray-100"
              >
                Gallery
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2 border-b border-gray-100"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Beautiful Nails,
              <br />
              <span className="text-5xl md:text-6xl">Beautiful You</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience luxury nail care with our expert technicians. From classic elegance to bold artistic designs, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <button className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                View Gallery
              </button>
            </div>
            
            {/* Floating Elements */}
            <div className="relative">
              <div className="absolute -top-10 left-1/4 animate-bounce delay-100">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                  💅
                </div>
              </div>
              <div className="absolute -top-16 right-1/4 animate-bounce delay-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white shadow-lg">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">8</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">4.9</h3>
              <p className="text-gray-600">Rating</p>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Indulge in our premium nail care services, crafted with precision and passion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-pink-100 group"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our stunning nail art and designs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`relative h-64 rounded-3xl bg-gradient-to-br ${image.gradient} overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {image.pattern}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl transform transition-all duration-500">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-xl font-bold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </h4>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Visit Us Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to treat yourself? Book an appointment or visit our salon
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <p className="text-lg opacity-90">
                123 Beauty Street<br />
                Downtown, TX 77001
              </p>
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <p className="text-lg opacity-90">
                Mon-Sat: 9AM - 7PM<br />
                Sunday: 11AM - 5PM
              </p>
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <p className="text-lg opacity-90">
                (555) 123-NAILS<br />
                hello@luxenails.com
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-white text-pink-600 px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mr-4">
              Book Appointment
            </button>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Luxe Nails</h3>
          </div>
          <p className="text-gray-400 mb-6">
            © 2025 Luxe Nails. All rights reserved. Made with ❤️ for beautiful nails.
          </p>
        </div>
      </footer>
    </div>
  );
}