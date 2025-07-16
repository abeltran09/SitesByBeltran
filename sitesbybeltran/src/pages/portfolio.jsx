import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Bella Vista",
      description: "A sample website design for a restaurant called Bella Vista, featuring an elegant landing page and smooth, modern animations for a luxurious dining experience",
      image: "./images/bellavista-logo-main.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "/bellavista",
      githubUrl: "https://github.com/yourusername/ecommerce-project",
      featured: true
    },
    {
      id: 2,
      title: "PrimeCuts",
      description: "A mock landing page design for a modern barbershop, featuring sleek visuals and stylish animations to create a bold, high-end first impression.",
      image: "./images/primecuts-logo-main.jpg",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "/primecuts",
      githubUrl: "https://github.com/yourusername/task-manager",
      featured: false
    },
    {
      id: 3,
      title: "Luxe Nails",
      description: "A mock landing page design for Luxe Nails, a premium nail salon, featuring elegant design elements and smooth, luxurious animations that highlight beauty, style, and sophistication.",
      image: "./images/luxenails-logo-main.jpg",
      technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
      liveUrl: "/luxenails",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      featured: false
    }
  ];

  return (
    <div className="">
      <Helmet>
        <title>Portfolio - SitesbyBeltran | Custom Web Development Projects</title>
        <meta name="description" content="View Angel Beltran's portfolio of custom web development projects. See examples of responsive websites, modern designs, and web applications built for businesses." />
        <link rel="canonical" href="https://www.sitesbybeltran.com/portfolio/" />
     </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-30">
        {/* Top background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
          ></div>
        </div>
        <div className="absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 tracking-tight">
              My <span className="bg-gradient-to-r bg-gradient-to-r from-[#D5451B] to-[#C5172E]
                 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Explore my latest work and see how I bring ideas to life through code, design, and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid mobile:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 tablet:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[#C5172E]/20 border border-gray-200 hover:border-rose-300 mobile:max-w-110 mobile:mx-auto ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}
                `}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#D5451B] to-[#C5172E] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies 
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-rose-50 text-rose-600 px-3 py-1 rounded-lg text-sm font-medium border border-rose-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>*/}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#D5451B] to-[#C5172E] hover:from-[#C5172E] to-[#D5451B] text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25 group/btn"
                  >
                    <Globe size={18} />
                    <span className="font-medium">Live Demo</span>
                    <ExternalLink size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/0 via-rose-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:via-rose-500/3 group-hover:to-rose-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss your next project and bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D5451B] to-[#C5172E] hover:from-[#C5172E] to-[#D5451B] text-white px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25 font-medium text-lg"
            >
              Get In Touch
              <ExternalLink size={20} />
            </a>
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
  );
};