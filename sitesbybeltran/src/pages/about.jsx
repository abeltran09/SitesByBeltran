import { useNavigate } from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();

    return(
        <div className="bg-white">
            <div className="pt-30 relative isolate px-6 pt-14 lg:px-8">
                {/* Top gradient background */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div 
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#D5451B] to-[#C5172E] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
                        style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}
                    ></div>
                </div>

                {/* Hero Section */}
                <div className="mx-auto max-w-4xl py-16 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                        About <span className="bg-gradient-to-r from-[#D5451B] to-[#C5172E] bg-clip-text text-transparent">SitesbyBeltran</span>
                    </h1>
                    
                </div>

                {/* What Is sitesbybeltran Section */}
                <div className="gap-8 lg:gap-16 items-center lg:py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#D5451B] to-[#C5172E] text-white mb-4">
                            What We Do
                        </div>
                        <h2 className="mb-6 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">Custom Web Solutions</h2>
                        <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-600">
                            Sites by Beltran is a solo web design & development studio dedicated to helping businesses stand out online. I create clean, modern, and effective websites that are fully tailored to your goals with custom code built from the ground up, not off-the-shelf templates.
                        </p>
                        <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-600">
                            Every website is handcrafted to reflect your brand, fit your business needs, and perform smoothly across all devices.
                        </p>
                        
                        {/* Key Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full"></div>
                                <span className="text-gray-700 font-medium">Custom Code</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full"></div>
                                <span className="text-gray-700 font-medium">Mobile Responsive</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full"></div>
                                <span className="text-gray-700 font-medium">SEO Optimized</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full"></div>
                                <span className="text-gray-700 font-medium">Fast Loading</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img className="w-full rounded-lg shadow-lg" src="./images/about-1.png" alt="Web design showcase 1" />
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img className="mt-4 w-full lg:mt-10 rounded-lg shadow-lg" src="./images/about-2.png" alt="Web design showcase 2" />
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="py-16 bg-gray-50 mx-4 rounded-2xl">
                    <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-[#D5451B] to-[#C5172E] bg-clip-text text-transparent mb-2">2+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-[#D5451B] to-[#C5172E] bg-clip-text text-transparent mb-2">100%</div>
                                <div className="text-gray-600">Custom Built</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold bg-gradient-to-r from-[#D5451B] to-[#C5172E] bg-clip-text text-transparent mb-2">24/7</div>
                                <div className="text-gray-600">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="flex flex-col gap-8 lg:gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1 mt-8 lg:mt-0">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img className="w-full rounded-lg shadow-lg" src="./images/about-3.png" alt="Mission showcase 1" />
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <img className="mt-4 w-full lg:mt-10 rounded-lg shadow-lg" src="./images/about-4.png" alt="Mission showcase 2" />
                        </div>
                    </div>
                    <div className="text-center lg:text-left order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#D5451B] to-[#C5172E] text-white mb-4">
                            Our Mission
                        </div>
                        <h2 className="mb-6 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">Building Digital Success</h2>
                        <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-600">
                            My mission is to build high-performing, custom websites that make your business stand out. 
                            I focus on delivering clean, modern designs that clearly showcase what you offer and attract more traffic.
                        </p>
                        <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-600">
                            From design to deployment and beyond I handle everything, including maintenance and updates, so you can stay focused on your business without the extra overhead.
                        </p>
                        
                        {/* Mission Points */}
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <span className="text-gray-700">End-to-end web development</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <span className="text-gray-700">Ongoing maintenance & support</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <span className="text-gray-700">Performance optimization</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Me Section */}
                <div className="gap-8 lg:gap-16 items-center py-16 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
                    <div className="text-center lg:text-left mb-8 lg:mb-0">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#D5451B] to-[#C5172E] text-white mb-4">
                            Meet the Developer
                        </div>
                        <h2 className="mb-6 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900">👋 About Angel</h2>
                        <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-600">
                            Hi, I'm Angel Beltran the person you'll be working with directly. 
                            I have around 2 years of experience building complex web applications and hands-on industry experience in software development and data.
                        </p>
                        <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-600">
                            I'm passionate about crafting clean, stylish websites that not only look great but also serve a clear purpose.
                            My goal is to help your business succeed by creating a strong, professional online presence that gives your customers exactly what they need and leaves a lasting impression.
                        </p>
                        
                        {/* Skills */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">React</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">JavaScript</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200">UI/UX Design</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#D5451B] to-[#C5172E] rounded-full opacity-20 blur-lg"></div>
                            <img className="relative w-48 sm:w-56 lg:w-72 h-48 sm:h-56 lg:h-72 object-cover rounded-full shadow-xl border-4 border-white" src="./images/headshot_pro.jpg" alt="Angel Beltran - Web Developer" />
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="py-16 text-center">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Let's discuss your project and create a website that drives real results for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => navigate('/contact')}  className="px-8 py-3 bg-gradient-to-r from-[#D5451B] to-[#C5172E] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                                Start Your Project
                            </button>
                            <button onClick={() => navigate('/portfolio')} className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors duration-200">
                                View Portfolio
                            </button>
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
        </div>
    )
}