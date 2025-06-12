import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Star, ChefHat, Utensils, Wine, Heart } from 'lucide-react';

export default function RestaurantLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    {
      name: "Truffle Risotto",
      description: "Creamy arborio rice with wild mushrooms and black truffle",
      price: "$28",
      image: "🍄"
    },
    {
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
      price: "$32",
      image: "🐟"
    },
    {
      name: "Wagyu Steak",
      description: "Prime cut with roasted garlic and red wine reduction",
      price: "$45",
      image: "🥩"
    }
  ];

  const testimonials = [
    {
      text: "An absolutely divine culinary experience. Every dish was a masterpiece!",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "The ambiance is perfect for date nights. Food quality is consistently exceptional.",
      author: "Michael R.",
      rating: 5
    },
    {
      text: "Best restaurant in town! The chef's attention to detail is remarkable.",
      author: "Emily K.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Bella Vista</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white/90">
              <a href="#menu" className="hover:text-purple-400 transition-colors">Menu</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              <a href="/" className="hover:text-purple-400 transition-colors">Go Back To SitesByBeltran</a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Bella Vista
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Where culinary artistry meets unforgettable dining experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Reserve Table
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 text-4xl animate-bounce delay-500">🍷</div>
        <div className="absolute bottom-1/4 right-10 text-4xl animate-bounce delay-1000">🍽️</div>
        <div className="absolute top-1/2 right-1/4 text-3xl animate-bounce delay-1500">⭐</div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Founded in 2018, Bella Vista has become a cornerstone of fine dining in the heart of downtown. 
                Our passionate team of chefs combines traditional techniques with innovative flavors to create 
                unforgettable culinary experiences.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Every dish tells a story, crafted with locally-sourced ingredients and served in an atmosphere 
                of warmth and elegance.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-400 fill-current" />
                  <span className="text-white">1000+ Happy Guests</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-8xl animate-pulse">👨‍🍳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-400">{item.price}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-800/20 to-pink-800/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">What Our Guests Say</h2>
          <div className="relative h-40">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-white/90 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-purple-400 font-semibold">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Visit Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-white/70">123 Gourmet Street<br />Downtown District</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
              <p className="text-white/70">Mon-Thu: 5PM-10PM<br />Fri-Sat: 5PM-11PM<br />Sun: 4PM-9PM</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reservations</h3>
              <p className="text-white/70">(555) 123-DINE<br />hello@bellavista.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ChefHat className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold text-white">Bella Vista</span>
          </div>
          <p className="text-white/60">© 2024 Bella Vista Restaurant. All rights reserved.</p>
          <p className="text-white/60 mt-2">Crafting memorable dining experiences since 2018</p>
        </div>
      </footer>
    </div>
  );
};